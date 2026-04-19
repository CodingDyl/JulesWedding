'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Guest {
  id: number;
  rsvp_id: number;
  name: string;
  email: string;
  dietary?: string;
  created_at: string;
}

interface RSVP {
  id: number;
  name: string;
  email: string;
  attending: 'yes' | 'no';
  dietary?: string;
  message?: string;
  created_at: string;
  guests: Guest[];
}

interface SongSummary {
  id: number;
  song_title: string;
  artist: string;
  submitted_by?: string;
  created_at: string;
  request_count: number;
}

export default function AdminRSVPs() {
  const router = useRouter();
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [songs, setSongs] = useState<SongSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState<'all' | 'yes' | 'no'>('all');
  const [activeTab, setActiveTab] = useState<'rsvps' | 'songs'>('rsvps');

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      const [rsvpResponse, songResponse] = await Promise.all([
        fetch('/api/admin/rsvps'),
        fetch('/api/admin/songs'),
      ]);

      if (rsvpResponse.status === 401 || songResponse.status === 401) {
        router.push('/admin/login');
        return;
      }

      const [rsvpData, songData] = await Promise.all([
        rsvpResponse.json(),
        songResponse.json(),
      ]);

      if (!rsvpResponse.ok) {
        setError(rsvpData.error || 'Failed to fetch RSVPs');
        return;
      }

      if (!songResponse.ok) {
        setError(songData.error || 'Failed to fetch songs');
        return;
      }

      setRsvps(rsvpData.rsvps);
      setSongs(songData.songs);
    } catch {
      setError('An error occurred while fetching admin data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const filteredRSVPs = filter === 'all' 
    ? rsvps 
    : rsvps.filter(rsvp => rsvp.attending === filter);

  const attendingCount = rsvps.filter(r => r.attending === 'yes').length;
  const notAttendingCount = rsvps.filter(r => r.attending === 'no').length;
  const totalSongRequests = songs.reduce((sum, song) => sum + song.request_count, 0);
  const totalGuests = rsvps.reduce((sum, rsvp) => {
    if (rsvp.attending === 'yes') {
      return sum + 1 + rsvp.guests.length; // Main guest + additional guests
    }
    return sum;
  }, 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading admin dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Wedding Admin</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage RSVP responses and requested songs in one place.
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full rounded-md bg-red-600 px-4 py-2 text-white transition duration-200 hover:bg-red-700 sm:w-auto"
            >
              Logout
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              onClick={() => setActiveTab('rsvps')}
              className={`rounded-md px-4 py-3 text-left transition duration-200 sm:min-w-48 ${
                activeTab === 'rsvps'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="text-sm uppercase tracking-[0.2em] opacity-80">RSVPs</div>
              <div className="mt-1 text-2xl font-bold">{rsvps.length}</div>
            </button>
            <button
              onClick={() => setActiveTab('songs')}
              className={`rounded-md px-4 py-3 text-left transition duration-200 sm:min-w-48 ${
                activeTab === 'songs'
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="text-sm uppercase tracking-[0.2em] opacity-80">Songs</div>
              <div className="mt-1 text-2xl font-bold">{songs.length}</div>
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-blue-50 p-4">
              <div className="text-2xl font-bold text-blue-600">{rsvps.length}</div>
              <div className="text-sm text-gray-600">Total RSVPs</div>
            </div>
            <div className="rounded-lg bg-green-50 p-4">
              <div className="text-2xl font-bold text-green-600">{attendingCount}</div>
              <div className="text-sm text-gray-600">Attending</div>
            </div>
            <div className="rounded-lg bg-red-50 p-4">
              <div className="text-2xl font-bold text-red-600">{notAttendingCount}</div>
              <div className="text-sm text-gray-600">Not Attending</div>
            </div>
            <div className="rounded-lg bg-amber-50 p-4">
              <div className="text-2xl font-bold text-amber-600">
                {activeTab === 'songs' ? totalSongRequests : totalGuests}
              </div>
              <div className="text-sm text-gray-600">
                {activeTab === 'songs' ? 'Total Song Requests' : 'Total Guests'}
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {activeTab === 'rsvps' ? (
          <>
            <div className="mb-6 rounded-lg bg-white p-4 shadow-md">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`rounded-md px-4 py-2 transition duration-200 ${
                    filter === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All ({rsvps.length})
                </button>
                <button
                  onClick={() => setFilter('yes')}
                  className={`rounded-md px-4 py-2 transition duration-200 ${
                    filter === 'yes'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Attending ({attendingCount})
                </button>
                <button
                  onClick={() => setFilter('no')}
                  className={`rounded-md px-4 py-2 transition duration-200 ${
                    filter === 'no'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Not Attending ({notAttendingCount})
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {filteredRSVPs.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-600">
                  No RSVPs found
                </div>
              ) : (
                filteredRSVPs.map((rsvp) => (
                  <div key={rsvp.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{rsvp.name}</h3>
                        <p className="text-gray-600 break-all">{rsvp.email}</p>
                        <p className="mt-1 text-sm text-gray-500">
                          Submitted: {new Date(rsvp.created_at).toLocaleDateString()} at{' '}
                          {new Date(rsvp.created_at).toLocaleTimeString()}
                        </p>
                      </div>
                      <span
                        className={`inline-flex w-fit rounded-full px-4 py-2 font-semibold ${
                          rsvp.attending === 'yes'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {rsvp.attending === 'yes' ? 'Attending' : 'Not Attending'}
                      </span>
                    </div>

                    {rsvp.dietary && (
                      <div className="mb-3">
                        <span className="font-semibold text-gray-700">Dietary Restrictions: </span>
                        <span className="text-gray-600">{rsvp.dietary}</span>
                      </div>
                    )}

                    {rsvp.message && (
                      <div className="mb-3">
                        <span className="font-semibold text-gray-700">Message: </span>
                        <span className="text-gray-600">{rsvp.message}</span>
                      </div>
                    )}

                    {rsvp.guests.length > 0 && (
                      <div className="mt-4 border-t border-gray-200 pt-4">
                        <h4 className="mb-2 font-semibold text-gray-700">
                          Additional Guests ({rsvp.guests.length})
                        </h4>
                        <div className="space-y-2">
                          {rsvp.guests.map((guest) => (
                            <div key={guest.id} className="rounded bg-gray-50 p-3">
                              <p className="font-medium text-gray-800">{guest.name}</p>
                              <p className="text-sm text-gray-600 break-all">{guest.email}</p>
                              {guest.dietary && (
                                <p className="mt-1 text-sm text-gray-600">
                                  <span className="font-semibold">Dietary: </span>
                                  {guest.dietary}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </>
        ) : (
          <div className="space-y-4">
            {songs.length === 0 ? (
              <div className="rounded-lg bg-white p-8 text-center text-gray-600 shadow-md">
                No song requests found
              </div>
            ) : (
              songs.map((song) => (
                <div key={`${song.song_title}-${song.artist}`} className="rounded-lg bg-white p-5 shadow-md">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-gray-800">{song.song_title}</h3>
                        <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
                          {song.request_count} request{song.request_count === 1 ? '' : 's'}
                        </span>
                      </div>
                      <p className="mt-1 text-gray-600">by {song.artist}</p>
                      {song.submitted_by && (
                        <p className="mt-2 text-sm text-gray-500">
                          Latest matching submission from {song.submitted_by}
                        </p>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      Last requested {new Date(song.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
