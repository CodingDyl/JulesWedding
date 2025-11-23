import { NextRequest, NextResponse } from 'next/server';
import { createSong } from '@/lib/db/queries';
import { sendSongNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { song_title, artist, submitted_by } = body;

    // Validate required fields
    if (!song_title || !artist) {
      return NextResponse.json(
        { error: 'Missing required fields: song_title and artist are required' },
        { status: 400 }
      );
    }

    // Create song in database
    const song = await createSong({
      song_title: song_title.trim(),
      artist: artist.trim(),
      submitted_by: submitted_by?.trim() || null,
    });

    // Send email notification (don't wait for it)
    sendSongNotification(song_title, artist, submitted_by).catch(err =>
      console.error('Failed to send song notification email:', err)
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Song request submitted successfully',
        song,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Song API error:', error);
    return NextResponse.json(
      { error: 'Failed to submit song request. Please try again.' },
      { status: 500 }
    );
  }
}

