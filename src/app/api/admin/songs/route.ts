import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSongRequestSummary } from '@/lib/db/queries';

const ADMIN_EMAILS = ['2610dylan@gmail.com', 'just.s.blume@gmail.com'];

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');

    if (!session || !ADMIN_EMAILS.includes(session.value)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const songs = await getSongRequestSummary();

    return NextResponse.json({ songs }, { status: 200 });
  } catch (error) {
    console.error('Error fetching songs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch songs' },
      { status: 500 }
    );
  }
}
