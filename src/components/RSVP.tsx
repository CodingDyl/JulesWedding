'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Guest {
  id: string;
  name: string;
  email: string;
  dietary: string;
}

const RSVP = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    dietary: '',
    message: ''
  });

  const [guests, setGuests] = useState<Guest[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingGuest, setEditingGuest] = useState<Guest | null>(null);
  const [guestFormData, setGuestFormData] = useState({
    name: '',
    email: '',
    dietary: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const submissionData = {
        name: formData.name,
        email: formData.email,
        attending: formData.attending as 'yes' | 'no',
        dietary: formData.dietary || undefined,
        message: formData.message || undefined,
        guests: guests.map(g => ({
          name: g.name,
          email: g.email,
          dietary: g.dietary || undefined
        }))
      };

      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit RSVP');
      }

      // Success! Redirect to thank you page
      router.push('/thank-you');
    } catch (error) {
      console.error('RSVP submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddGuest = () => {
    const newGuest: Guest = {
      id: Date.now().toString(),
      name: '',
      email: '',
      dietary: ''
    };
    setEditingGuest(newGuest);
    setGuestFormData({ name: '', email: '', dietary: '' });
    setIsModalOpen(true);
  };

  const handleEditGuest = (guest: Guest) => {
    setEditingGuest(guest);
    setGuestFormData({
      name: guest.name,
      email: guest.email,
      dietary: guest.dietary
    });
    setIsModalOpen(true);
  };

  const handleGuestFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setGuestFormData({
      ...guestFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveGuest = () => {
    if (editingGuest && guestFormData.name.trim() && guestFormData.email.trim()) {
      const updatedGuest: Guest = {
        ...editingGuest,
        name: guestFormData.name.trim(),
        email: guestFormData.email.trim(),
        dietary: guestFormData.dietary.trim()
      };

      if (guests.find(g => g.id === editingGuest.id)) {
        // Update existing guest
        setGuests(guests.map(g => g.id === editingGuest.id ? updatedGuest : g));
      } else {
        // Add new guest
        setGuests([...guests, updatedGuest]);
      }

      setIsModalOpen(false);
      setEditingGuest(null);
      setGuestFormData({ name: '', email: '', dietary: '' });
    }
  };

  const handleDeleteGuest = (guestId: string) => {
    setGuests(guests.filter(g => g.id !== guestId));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingGuest(null);
    setGuestFormData({ name: '', email: '', dietary: '' });
  };

  return (
    <section id="rsvp" className="py-16 md:py-20 px-4 md:px-8 bg-transparent relative">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--text-accent)] mb-4">
            RSVP
          </h2>
          <div className="w-24 h-px bg-[var(--foreground)] mx-auto"></div>
        </div>

        {/* RSVP Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-libre-baskerville text-lg mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[var(--text-main)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-libre-baskerville text-lg mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[var(--text-main)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
            />
          </div>

          {/* Attending */}
          <div>
            <label htmlFor="attending" className="block font-libre-baskerville text-lg mb-2">
              Will you be attending? *
            </label>
            <select
              id="attending"
              name="attending"
              value={formData.attending}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[var(--text-main)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
            >
              <option value="">Please select...</option>
              <option value="yes">Yes, I will attend</option>
              <option value="no">No, I cannot attend</option>
            </select>
          </div>

          {/* Dietary Restrictions */}
          <div>
            <label htmlFor="dietary" className="block font-libre-baskerville text-lg mb-2">
              Dietary Restrictions
            </label>
            <input
              type="text"
              id="dietary"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              placeholder="e.g., Vegetarian, Gluten-free, Allergies"
              className="w-full px-4 py-3 border border-[var(--text-main)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
            />
          </div>

          {/* Add Guests */}
          <div>
            <label className="block font-libre-baskerville text-lg mb-2">
              Additional Guests
            </label>
            <button
              type="button"
              onClick={handleAddGuest}
              className="w-full px-4 py-3 border-2 border-dashed border-[var(--text-main)] rounded-lg bg-transparent font-libre-baskerville hover:bg-[var(--bg-secondary)]/30 transition-colors duration-300 text-[var(--text-main)]"
            >
              + Add Guest
            </button>

            {/* Guest List */}
            {guests.length > 0 && (
              <div className="mt-4 space-y-3">
                {guests.map((guest) => (
                  <div key={guest.id} className="flex items-center gap-3 p-3 border border-[var(--text-main)] rounded-lg bg-[var(--bg-secondary)]/10">
                    <button
                      type="button"
                      onClick={() => handleEditGuest(guest)}
                      className="flex-1 text-left font-libre-baskerville text-[var(--text-main)] hover:underline"
                    >
                      <span className="font-semibold">{guest.name || 'Unnamed Guest'}</span>
                      {guest.email && <span className="text-sm text-gray-600 ml-2">({guest.email})</span>}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteGuest(guest.id)}
                      className="text-red-500 hover:text-red-700 font-libre-baskerville text-sm"
                      aria-label="Delete guest"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-libre-baskerville text-lg mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Any additional comments or well wishes..."
              className="w-full px-4 py-3 border border-[var(--foreground)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[var(--text-accent)] text-[var(--bg-primary)] px-12 py-4 rounded-lg font-libre-baskerville text-lg hover:bg-[var(--text-main)] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Send RSVP'}
            </button>
          </div>

          {/* Error Message */}
          {submitError && (
            <div className="mt-4 p-4 border border-red-500 rounded-lg bg-red-50 text-red-700 text-center">
              <p className="font-libre-baskerville">{submitError}</p>
            </div>
          )}

          {/* Success Message */}
          {submitSuccess && (
            <div className="mt-4 p-4 border border-green-500 rounded-lg bg-green-50 text-green-700 text-center">
              <p className="font-libre-baskerville">
                Thank you! Your RSVP has been submitted successfully. We can't wait to celebrate with you! 💕
              </p>
            </div>
          )}
        </form>

        {/* RSVP Deadline */}
        <div className="text-center mt-12 p-6 border border-[var(--text-main)] rounded-lg bg-[var(--bg-secondary)]/10">
          <p className="font-libre-baskerville text-lg">
            Please RSVP by <span className="font-semibold">20 January 2026</span>
          </p>
        </div>
      </div>

      {/* Guest Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--bg-primary)] border-2 border-[var(--text-accent)] rounded-lg p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-dancing-script text-3xl text-[var(--text-accent)]">
                Guest Information
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-[var(--text-main)] hover:text-[var(--text-accent)] text-2xl"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Guest Name */}
              <div>
                <label htmlFor="guestName" className="block font-libre-baskerville text-lg mb-2">
                  Guest Name *
                </label>
                <input
                  type="text"
                  id="guestName"
                  name="name"
                  value={guestFormData.name}
                  onChange={handleGuestFormChange}
                  required
                  placeholder="Enter guest name"
                  className="w-full px-4 py-3 border border-[var(--text-main)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                />
              </div>

              {/* Guest Email */}
              <div>
                <label htmlFor="guestEmail" className="block font-libre-baskerville text-lg mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="guestEmail"
                  name="email"
                  value={guestFormData.email}
                  onChange={handleGuestFormChange}
                  required
                  placeholder="Enter guest email"
                  className="w-full px-4 py-3 border border-[var(--text-main)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                />
              </div>

              {/* Guest Dietary Requirements */}
              <div>
                <label htmlFor="guestDietary" className="block font-libre-baskerville text-lg mb-2">
                  Dietary Requirements
                </label>
                <textarea
                  id="guestDietary"
                  name="dietary"
                  value={guestFormData.dietary}
                  onChange={handleGuestFormChange}
                  rows={3}
                  placeholder="e.g., Vegetarian, Gluten-free, Allergies"
                  className="w-full px-4 py-3 border border-[var(--foreground)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] resize-none"
                />
              </div>

              {/* Complete Button */}
              <div className="text-center pt-4">
                <button
                  type="button"
                  onClick={handleSaveGuest}
                  className="bg-[var(--text-accent)] text-[var(--bg-primary)] px-10 py-3 rounded-lg font-libre-baskerville text-lg hover:bg-[var(--text-main)] transition-colors duration-300"
                >
                  Complete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RSVP; 