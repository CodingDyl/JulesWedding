export interface RSVP {
  id?: number;
  name: string;
  email: string;
  attending: 'yes' | 'no';
  dietary?: string;
  message?: string;
  created_at?: string;
}

export interface Guest {
  id?: number;
  rsvp_id?: number;
  name: string;
  email: string;
  dietary?: string;
  created_at?: string;
}

export interface Song {
  id?: number;
  song_title: string;
  artist: string;
  submitted_by?: string;
  created_at?: string;
}

export interface RSVPSubmission {
  name: string;
  email: string;
  attending: 'yes' | 'no';
  dietary?: string;
  message?: string;
  guests: Omit<Guest, 'id' | 'rsvp_id' | 'created_at'>[];
}

