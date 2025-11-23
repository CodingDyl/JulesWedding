# Setup Guide: Prisma Postgres + Resend

This guide will walk you through setting up the database and email service for the wedding website using **Prisma** with Vercel Postgres.

## Step 1: Set up Vercel Postgres (Prisma)

1. **Go to your Vercel Dashboard**
   - Navigate to your project
   - Go to the "Storage" tab
   - Click "Create Database" → Select "Postgres" (Prisma)

2. **Create the Database**
   - Choose a name for your database (e.g., `wedding-db`)
   - Select a region closest to you
   - Click "Create"

3. **Get Your Connection String**
   - Once created, go to the database settings
   - Copy the `DATABASE_URL` connection string
   - It should look like: `postgres://user:password@host:port/database?sslmode=require`

4. **Add Environment Variable**
   - Add `DATABASE_URL` to your `.env.local` file:
     ```
     DATABASE_URL=your_connection_string_here
     ```
   - Also add it to Vercel: Project Settings → Environment Variables

## Step 2: Run Prisma Migrations

1. **Create the database tables**
   ```bash
   npx prisma migrate dev --name init
   ```
   
   This will:
   - Create the migration files
   - Apply the schema to your database
   - Generate the Prisma Client

2. **For Production (Vercel)**
   - Vercel will automatically run migrations on deploy if you have:
     ```json
     "prisma": {
       "postinstall": "prisma generate && prisma migrate deploy"
     }
     ```
   - Or manually run: `npx prisma migrate deploy`

## Step 3: Set up Resend (Email Service)

1. **Create a Resend Account**
   - Go to https://resend.com
   - Sign up for a free account

2. **Get Your API Key**
   - Go to API Keys section
   - Create a new API key
   - Copy the key (starts with `re_...`)

3. **Verify Your Domain (Optional but Recommended)**
   - For production, you'll want to verify your domain
   - For testing, you can use `onboarding@resend.dev` (limited to 100 emails/day)

4. **Add Environment Variables to `.env.local`**
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   COUPLE_EMAIL=just.s.blume@gmail.com
   RESEND_FROM_EMAIL=onboarding@resend.dev
   ```
   
   Also add these to Vercel: Project Settings → Environment Variables

## Step 4: Update Email Configuration (if needed)

The email configuration is already set up to use environment variables:
- `RESEND_FROM_EMAIL` - The "from" email address
- `COUPLE_EMAIL` - Where notifications are sent

For testing, use `onboarding@resend.dev` as `RESEND_FROM_EMAIL`.

For production (after domain verification):
- Update `RESEND_FROM_EMAIL` to your verified domain email (e.g., `noreply@yourdomain.com`)

## Step 5: Test Everything

1. **Test Database Connection**
   - Run: `npx prisma studio` to open Prisma Studio (database GUI)
   - Or visit: `http://localhost:3000/api/init-db` (should show success)

2. **Test RSVP Submission**
   - Fill out the RSVP form on your website
   - Check that you receive an email notification
   - Check Prisma Studio or Vercel dashboard to see the data

3. **Test Song Submission**
   - Submit a song request
   - Check that you receive an email notification
   - Check the database

## Viewing Your Data

### Option 1: Prisma Studio (Recommended)
```bash
npx prisma studio
```
This opens a web interface at `http://localhost:3000` where you can view and edit all your data.

### Option 2: Vercel Postgres Dashboard
- Go to your Vercel project → Storage → Postgres
- Use the SQL editor to query your data:
  ```sql
  SELECT * FROM rsvps;
  SELECT * FROM guests;
  SELECT * FROM songs;
  ```

### Option 3: Export to CSV (Future)
- We can add an admin page later to export all data to CSV
- Or you can use Prisma Studio to export

## Troubleshooting

### Database Connection Issues
- Make sure `DATABASE_URL` is set correctly in `.env.local`
- Verify the connection string format
- Check that migrations have been run: `npx prisma migrate status`
- Try regenerating Prisma Client: `npx prisma generate`

### Migration Issues
- If tables already exist, you might need to reset:
  ```bash
  npx prisma migrate reset
  ```
  ⚠️ **Warning:** This will delete all data!

### Email Not Sending
- Check that `RESEND_API_KEY` is set correctly
- Verify the `from` email address is correct
- Check Resend dashboard for any errors
- For testing, make sure you're using `onboarding@resend.dev` (limited to 100/day)

### API Errors
- Check browser console for errors
- Check Vercel function logs
- Verify all environment variables are set
- Make sure Prisma Client is generated: `npx prisma generate`

## Prisma Commands Reference

```bash
# Generate Prisma Client (after schema changes)
npx prisma generate

# Create and apply a new migration
npx prisma migrate dev --name migration_name

# Apply migrations in production
npx prisma migrate deploy

# Open Prisma Studio (database GUI)
npx prisma studio

# Check migration status
npx prisma migrate status

# Format the schema file
npx prisma format

# Validate the schema
npx prisma validate
```

## Next Steps (Optional)

1. **Add Admin Dashboard**
   - Create a password-protected page to view all RSVPs and songs
   - Add export functionality

2. **Add Deadline Reminder**
   - Set up a cron job to send reminder emails before the RSVP deadline

3. **Add Summary Email**
   - Automatically send a summary of all RSVPs on the deadline date

## Support

If you run into any issues, check:
- Vercel function logs
- Resend dashboard for email errors
- Browser console for frontend errors
- Prisma logs: `npx prisma --help`
