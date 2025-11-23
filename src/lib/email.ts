import { Resend } from 'resend';
import type { RSVPSubmission } from './db/types';

const resend = new Resend(process.env.RESEND_API_KEY);

const COUPLE_EMAIL = process.env.COUPLE_EMAIL || 'just.s.blume@gmail.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

export async function sendRSVPNotification(rsvpData: RSVPSubmission) {
  try {
    const attendingText = rsvpData.attending === 'yes' ? 'Yes' : 'No';
    const guestsText = rsvpData.guests.length > 0 
      ? `\n\nAdditional Guests:\n${rsvpData.guests.map(g => `- ${g.name} (${g.email})${g.dietary ? ` - ${g.dietary}` : ''}`).join('\n')}`
      : '';

    const emailContent = `
New RSVP Received!

Name: ${rsvpData.name}
Email: ${rsvpData.email}
Attending: ${attendingText}
${rsvpData.dietary ? `Dietary Restrictions: ${rsvpData.dietary}` : ''}${guestsText}
${rsvpData.message ? `\nMessage:\n${rsvpData.message}` : ''}

---
Received at: ${new Date().toLocaleString()}
    `.trim();

    await resend.emails.send({
      from: `Wedding Website <${FROM_EMAIL}>`,
      to: COUPLE_EMAIL,
      subject: `New RSVP from ${rsvpData.name}`,
      text: emailContent,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending RSVP notification email:', error);
    // Don't throw - we don't want email failures to break RSVP submissions
    return { success: false, error };
  }
}

export async function sendSongNotification(songTitle: string, artist: string, submittedBy?: string) {
  try {
    const emailContent = `
New Song Request!

Song: ${songTitle}
Artist: ${artist}
${submittedBy ? `Submitted by: ${submittedBy}` : 'Submitted anonymously'}

---
Received at: ${new Date().toLocaleString()}
    `.trim();

    await resend.emails.send({
      from: `Wedding Website <${FROM_EMAIL}>`,
      to: COUPLE_EMAIL,
      subject: `New Song Request: ${songTitle} by ${artist}`,
      text: emailContent,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending song notification email:', error);
    // Don't throw - we don't want email failures to break song submissions
    return { success: false, error };
  }
}

