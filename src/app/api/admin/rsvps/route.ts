import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getAllRSVPs } from '@/lib/db/queries';

const ADMIN_EMAILS = ['2610dylan@gmail.com', 'just.s.blume@gmail.com'];

export async function GET(request: NextRequest) {
  try {
    // Check if user is authenticated
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');

    if (!session || !ADMIN_EMAILS.includes(session.value)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Fetch all RSVPs
    const rsvps = await getAllRSVPs();

    return NextResponse.json({ rsvps }, { status: 200 });
  } catch (error) {
    console.error('Error fetching RSVPs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch RSVPs' },
      { status: 500 }
    );
  }
}

