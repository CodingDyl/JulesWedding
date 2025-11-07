'use client'
import React, { useState } from 'react';

const SpotifyList = () => {
  const [songTitle, setSongTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [submittedBy, setSubmittedBy] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (songTitle.trim() && artist.trim()) {
      // TODO: Connect to backend API when ready
      // For now, just show success message
      setIsSubmitted(true);
      setSongTitle('');
      setArtist('');
      setSubmittedBy('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="music-requests" className="py-20 px-8 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--text-accent)] mb-4">
            Song Requests
          </h2>
          <div className="w-24 h-px bg-[var(--foreground)] mx-auto mb-6"></div>
          <p className="font-libre-baskerville text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Help us create the perfect playlist! Share your favorite songs to dance to on our special day.
          </p>
        </div>

        {/* Input Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="border border-[var(--text-main)] rounded-lg p-6 md:p-8 bg-[var(--bg-primary)] shadow-lg">
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
                    className="w-full px-4 py-3 border border-[var(--text-main)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
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
                    className="w-full px-4 py-3 border border-[var(--text-main)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
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
                    className="w-full px-4 py-3 border border-[var(--text-main)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                  />
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="bg-[var(--text-accent)] text-[var(--bg-primary)] px-10 py-3 rounded-lg font-libre-baskerville text-lg hover:bg-[var(--text-main)] transition-colors duration-300"
                  >
                    Submit Song
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <div className="border border-[var(--text-main)] rounded-lg p-6 bg-[var(--bg-secondary)]/20 text-center">
              <p className="font-libre-baskerville text-lg text-[var(--text-main)]">
                Thank you! Your song request has been submitted. 🎵
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpotifyList;
