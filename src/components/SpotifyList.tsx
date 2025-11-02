'use client'
import React, { useState } from 'react';

interface Song {
  id: string;
  title: string;
  artist: string;
  submittedBy: string;
}

const SpotifyList = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [songTitle, setSongTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [submittedBy, setSubmittedBy] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (songTitle.trim() && artist.trim()) {
      const newSong: Song = {
        id: Date.now().toString(),
        title: songTitle.trim(),
        artist: artist.trim(),
        submittedBy: submittedBy.trim() || 'Anonymous'
      };
      setSongs([...songs, newSong]);
      setSongTitle('');
      setArtist('');
      setSubmittedBy('');
    }
  };

  const totalPages = Math.ceil(songs.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedSongs = songs.slice(startIndex, endIndex);
  const hasMoreSongs = songs.length > itemsPerPage;

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section id="music-requests" className="min-h-screen py-20 px-8 bg-[var(--background)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--foreground)] mb-4">
            Song Requests
          </h2>
          <div className="w-24 h-px bg-[var(--foreground)] mx-auto mb-6"></div>
          <p className="font-libre-baskerville text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Help us create the perfect playlist! Share your favorite songs to dance to on our special day.
          </p>
        </div>

        {/* Input Form */}
        <div className="mb-16 relative z-10">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="border border-[var(--foreground)] rounded-lg p-6 md:p-8 bg-[var(--background)] shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="songTitle" className="block font-libre-baskerville text-lg mb-2">
                    Song Title *
                  </label>
                  <input
                    type="text"
                    id="songTitle"
                    value={songTitle}
                    onChange={(e) => setSongTitle(e.target.value)}
                    required
                    placeholder="Enter song title"
                    className="w-full px-4 py-3 border border-[var(--foreground)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
                  />
                </div>

                <div>
                  <label htmlFor="artist" className="block font-libre-baskerville text-lg mb-2">
                    Artist *
                  </label>
                  <input
                    type="text"
                    id="artist"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    required
                    placeholder="Enter artist name"
                    className="w-full px-4 py-3 border border-[var(--foreground)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
                  />
                </div>

                <div>
                  <label htmlFor="submittedBy" className="block font-libre-baskerville text-lg mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="submittedBy"
                    value={submittedBy}
                    onChange={(e) => setSubmittedBy(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-[var(--foreground)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
                  />
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="bg-[var(--foreground)] text-[var(--background)] px-10 py-3 rounded-lg font-libre-baskerville text-lg hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Add Song
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Boombox Display */}
        <div className="max-w-4xl mx-auto">
          {songs.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 border-2 border-[var(--foreground)] rounded-full mb-6 flex items-center justify-center mx-auto">
                <span className="text-4xl">🎵</span>
              </div>
              <p className="font-libre-baskerville text-xl text-[var(--foreground)]">
                No songs yet. Be the first to add one!
              </p>
            </div>
          ) : (
            <div className="relative">
              {/* Boombox Container */}
              <div className="border-2 border-[var(--foreground)] rounded-2xl p-8 md:p-12 shadow-xl bg-[var(--background)]">
                {/* Boombox Top Section with Speakers */}
                <div className="mb-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Left Speaker */}
                    <div className="bg-[var(--foreground)]/10 rounded-lg p-6 border border-[var(--foreground)] flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-2">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-[var(--foreground)] rounded-full opacity-40"></div>
                        ))}
                      </div>
                    </div>
                    {/* Right Speaker */}
                    <div className="bg-[var(--foreground)]/10 rounded-lg p-6 border border-[var(--foreground)] flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-2">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-[var(--foreground)] rounded-full opacity-40"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Display Screen */}
                  <div className="bg-[var(--foreground)]/5 rounded-lg p-6 border-2 border-[var(--foreground)]">
                    <div className="bg-[var(--background)] rounded p-4 border border-[var(--foreground)]">
                      <div className="text-[var(--foreground)] font-libre-baskerville text-sm mb-4 text-center font-semibold tracking-wider">
                        NOW PLAYING
                      </div>
                      
                      {/* Song List Display */}
                      <div className="space-y-3 max-h-[400px] overflow-y-auto">
                        {displayedSongs.map((song, index) => {
                          const globalIndex = startIndex + index;
                          return (
                            <div
                              key={song.id}
                              className="bg-[var(--foreground)]/5 rounded p-3 border border-[var(--foreground)]/30 hover:bg-[var(--foreground)]/10 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <div className="text-[var(--foreground)] font-dancing-script text-lg w-10 text-center font-semibold">
                                  {(globalIndex + 1).toString().padStart(2, '0')}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-[var(--foreground)] font-libre-baskerville text-base font-semibold truncate" title={song.title}>
                                    {song.title}
                                  </div>
                                  <div className="text-[var(--foreground)]/70 font-libre-baskerville text-sm truncate" title={song.artist}>
                                    {song.artist}
                                  </div>
                                  {song.submittedBy && song.submittedBy !== 'Anonymous' && (
                                    <div className="text-[var(--foreground)]/60 font-libre-baskerville text-xs mt-1 italic">
                                      by {song.submittedBy}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Page Indicator */}
                      {hasMoreSongs && (
                        <div className="mt-4 text-center">
                          <p className="font-libre-baskerville text-sm text-[var(--foreground)]/70">
                            Page {currentPage + 1} of {totalPages}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Boombox Bottom Control Panel */}
                <div className="flex items-center justify-center gap-4">
                  {hasMoreSongs && (
                    <button
                      onClick={handlePrevious}
                      className="w-12 h-12 bg-[var(--foreground)]/10 rounded-full border-2 border-[var(--foreground)] flex items-center justify-center hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-300"
                      aria-label="Previous songs"
                    >
                      <span className="text-xl">⏮</span>
                    </button>
                  )}
                  <div className="w-16 h-16 bg-[var(--foreground)] rounded-full border-2 border-[var(--foreground)] flex items-center justify-center shadow-lg">
                    <span className="text-2xl text-[var(--background)]">▶</span>
                  </div>
                  {hasMoreSongs && (
                    <button
                      onClick={handleNext}
                      className="w-12 h-12 bg-[var(--foreground)]/10 rounded-full border-2 border-[var(--foreground)] flex items-center justify-center hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-300"
                      aria-label="Next songs"
                    >
                      <span className="text-xl">⏭</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Song Count */}
        {songs.length > 0 && (
          <div className="text-center mt-8">
            <p className="font-libre-baskerville text-lg">
              <span className="font-semibold">{songs.length}</span> {songs.length === 1 ? 'song' : 'songs'} requested
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpotifyList;
