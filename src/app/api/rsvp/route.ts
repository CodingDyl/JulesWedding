import { NextRequest, NextResponse } from 'next/server';
import { createRSVP } from '@/lib/db/queries';
import { sendRSVPNotification } from '@/lib/email';
import type { RSVPSubmission } from '@/lib/db/types';

export async function POST(request: NextRequest) {
  try {
    const body: RSVPSubmission = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.attending) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and attending are required' },
        { status: 400 }
      );
    }

    // Validate attending value
    if (body.attending !== 'yes' && body.attending !== 'no') {
      return NextResponse.json(
        { error: 'Invalid attending value. Must be "yes" or "no"' },
        { status: 400 }
      );
    }

    // Create RSVP in database
    const rsvp = await createRSVP(body);

    // Send email notification (don't wait for it)
    sendRSVPNotification(body).catch(err => 
      console.error('Failed to send RSVP notification email:', err)
    );

    return NextResponse.json(
      { 
        success: true, 
        message: 'RSVP submitted successfully',
        rsvp 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('RSVP API error:', error);
    return NextResponse.json(
      { error: 'Failed to submit RSVP. Please try again.' },
      { status: 500 }
    );
  }
}

