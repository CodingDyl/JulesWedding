import { prisma } from './prisma';
import type { RSVP, Guest, Song, RSVPSubmission } from './types';

export interface SongRequestSummary extends Song {
  request_count: number;
}

// RSVP queries
export async function checkExistingRSVP(email: string) {
  try {
    const existingRSVP = await prisma.rSVP.findFirst({
      where: {
        email: email.toLowerCase(),
      },
    });
    
    return existingRSVP !== null;
  } catch (error) {
    console.error('Error checking existing RSVP:', error);
    throw error;
  }
}

export async function createRSVP(data: RSVPSubmission) {
  try {
    // Create RSVP with guests in a transaction
    const rsvp = await prisma.rSVP.create({
      data: {
        name: data.name,
        email: data.email.toLowerCase(), // Normalize email to lowercase
        attending: data.attending,
        dietary: data.dietary || null,
        message: data.message || null,
        guests: {
          create: data.guests.map(guest => ({
            name: guest.name,
            email: guest.email.toLowerCase(), // Normalize guest emails too
            dietary: guest.dietary || null,
          })),
        },
      },
      include: {
        guests: true,
      },
    });

    // Map Prisma response to our type format
    return {
      id: rsvp.id,
      name: rsvp.name,
      email: rsvp.email,
      attending: rsvp.attending as 'yes' | 'no',
      dietary: rsvp.dietary || undefined,
      message: rsvp.message || undefined,
      created_at: rsvp.createdAt.toISOString(),
      guests: rsvp.guests.map(g => ({
        id: g.id,
        rsvp_id: g.rsvpId,
        name: g.name,
        email: g.email,
        dietary: g.dietary || undefined,
        created_at: g.createdAt.toISOString(),
      })),
    } as RSVP & { guests: Guest[] };
  } catch (error) {
    console.error('Error creating RSVP:', error);
    throw error;
  }
}

export async function getAllRSVPs() {
  try {
    const rsvps = await prisma.rSVP.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        guests: true,
      },
    });

    // Map Prisma responses to our type format
    return rsvps.map(rsvp => ({
      id: rsvp.id,
      name: rsvp.name,
      email: rsvp.email,
      attending: rsvp.attending as 'yes' | 'no',
      dietary: rsvp.dietary || undefined,
      message: rsvp.message || undefined,
      created_at: rsvp.createdAt.toISOString(),
      guests: rsvp.guests.map(g => ({
        id: g.id,
        rsvp_id: g.rsvpId,
        name: g.name,
        email: g.email,
        dietary: g.dietary || undefined,
        created_at: g.createdAt.toISOString(),
      })),
    }));
  } catch (error) {
    console.error('Error fetching RSVPs:', error);
    throw error;
  }
}

// Song queries
export async function createSong(data: Omit<Song, 'id' | 'created_at'>) {
  try {
    const song = await prisma.song.create({
      data: {
        songTitle: data.song_title,
        artist: data.artist,
        submittedBy: data.submitted_by || null,
      },
    });

    return {
      id: song.id,
      song_title: song.songTitle,
      artist: song.artist,
      submitted_by: song.submittedBy,
      created_at: song.createdAt.toISOString(),
    } as Song;
  } catch (error) {
    console.error('Error creating song:', error);
    throw error;
  }
}

export async function getAllSongs() {
  try {
    const songs = await prisma.song.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return songs.map(song => ({
      id: song.id,
      song_title: song.songTitle,
      artist: song.artist,
      submitted_by: song.submittedBy,
      created_at: song.createdAt.toISOString(),
    })) as Song[];
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
}

export async function getSongRequestSummary() {
  try {
    const songs = await getAllSongs();
    const songMap = new Map<string, SongRequestSummary>();

    for (const song of songs) {
      const normalizedTitle = song.song_title.trim().replace(/\s+/g, ' ').toLowerCase();
      const normalizedArtist = song.artist.trim().replace(/\s+/g, ' ').toLowerCase();
      const key = `${normalizedTitle}::${normalizedArtist}`;
      const existing = songMap.get(key);

      if (existing) {
        existing.request_count += 1;
        continue;
      }

      songMap.set(key, {
        ...song,
        request_count: 1,
      });
    }

    return Array.from(songMap.values()).sort((a, b) => {
      if (b.request_count !== a.request_count) {
        return b.request_count - a.request_count;
      }

      return new Date(b.created_at ?? 0).getTime() - new Date(a.created_at ?? 0).getTime();
    });
  } catch (error) {
    console.error('Error fetching song summary:', error);
    throw error;
  }
}
