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

export default function AdminRSVPs() {
  const router = useRouter();
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState<'all' | 'yes' | 'no'>('all');

  useEffect(() => {
    fetchRSVPs();
  }, []);

  const fetchRSVPs = async () => {
    try {
      const response = await fetch('/api/admin/rsvps');

      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }

      const data = await response.json();

      if (response.ok) {
        setRsvps(data.rsvps);
      } else {
        setError(data.error || 'Failed to fetch RSVPs');
      }
    } catch (err) {
      setError('An error occurred while fetching RSVPs');
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
  const totalGuests = rsvps.reduce((sum, rsvp) => {
    if (rsvp.attending === 'yes') {
      return sum + 1 + rsvp.guests.length; // Main guest + additional guests
    }
    return sum;
  }, 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading RSVPs...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">RSVP Management</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-200"
            >
              Logout
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{rsvps.length}</div>
              <div className="text-sm text-gray-600">Total RSVPs</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{attendingCount}</div>
              <div className="text-sm text-gray-600">Attending</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600">{notAttendingCount}</div>
              <div className="text-sm text-gray-600">Not Attending</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{totalGuests}</div>
              <div className="text-sm text-gray-600">Total Guests</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition duration-200 ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All ({rsvps.length})
            </button>
            <button
              onClick={() => setFilter('yes')}
              className={`px-4 py-2 rounded-md transition duration-200 ${
                filter === 'yes'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Attending ({attendingCount})
            </button>
            <button
              onClick={() => setFilter('no')}
              className={`px-4 py-2 rounded-md transition duration-200 ${
                filter === 'no'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Not Attending ({notAttendingCount})
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* RSVPs List */}
        <div className="space-y-4">
          {filteredRSVPs.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-600">
              No RSVPs found
            </div>
          ) : (
            filteredRSVPs.map((rsvp) => (
              <div key={rsvp.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{rsvp.name}</h3>
                    <p className="text-gray-600">{rsvp.email}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Submitted: {new Date(rsvp.created_at).toLocaleDateString()} at{' '}
                      {new Date(rsvp.created_at).toLocaleTimeString()}
                    </p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full font-semibold ${
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
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Additional Guests ({rsvp.guests.length})
                    </h4>
                    <div className="space-y-2">
                      {rsvp.guests.map((guest) => (
                        <div key={guest.id} className="bg-gray-50 p-3 rounded">
                          <p className="font-medium text-gray-800">{guest.name}</p>
                          <p className="text-sm text-gray-600">{guest.email}</p>
                          {guest.dietary && (
                            <p className="text-sm text-gray-600 mt-1">
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
      </div>
    </div>
  );
}

