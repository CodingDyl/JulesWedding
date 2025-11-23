-- RSVPs table
CREATE TABLE IF NOT EXISTS rsvps (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  attending VARCHAR(10) NOT NULL CHECK (attending IN ('yes', 'no')),
  dietary TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Guests table (for additional guests in RSVP)
CREATE TABLE IF NOT EXISTS guests (
  id SERIAL PRIMARY KEY,
  rsvp_id INTEGER REFERENCES rsvps(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  dietary TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Songs table
CREATE TABLE IF NOT EXISTS songs (
  id SERIAL PRIMARY KEY,
  song_title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL,
  submitted_by VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_rsvps_email ON rsvps(email);
CREATE INDEX IF NOT EXISTS idx_rsvps_created_at ON rsvps(created_at);
CREATE INDEX IF NOT EXISTS idx_guests_rsvp_id ON guests(rsvp_id);
CREATE INDEX IF NOT EXISTS idx_songs_created_at ON songs(created_at);

