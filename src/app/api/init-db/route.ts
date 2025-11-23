import { NextResponse } from 'next/server';

// This endpoint runs Prisma migrations to set up the database
// Prisma migrations should be run via CLI, but this provides a simple way to initialize
// For production, use: npx prisma migrate deploy
export async function GET() {
  try {
    // Prisma migrations should be run via CLI:
    // npx prisma migrate dev (for development)
    // npx prisma migrate deploy (for production)
    
    // For now, we'll just verify the connection works
    const { prisma } = await import('@/lib/db/prisma');
    
    // Test connection
    await prisma.$connect();
    await prisma.$disconnect();
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Database connection successful. Run "npx prisma migrate dev" to create tables.',
        note: 'Make sure to run migrations: npx prisma migrate dev'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to connect to database', 
        details: error instanceof Error ? error.message : 'Unknown error',
        note: 'Make sure DATABASE_URL is set correctly in your .env.local file'
      },
      { status: 500 }
    );
  }
}
