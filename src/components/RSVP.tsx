'use client'
import { useState } from 'react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '',
    dietary: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('RSVP submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="rsvp" className="py-20 px-8 bg-[var(--background)]">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--foreground)] mb-4">
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
              className="w-full px-4 py-3 border border-[var(--foreground)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
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
              className="w-full px-4 py-3 border border-[var(--foreground)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
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
              className="w-full px-4 py-3 border border-[var(--foreground)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
            >
              <option value="">Please select...</option>
              <option value="yes">Yes, I will attend</option>
              <option value="no">No, I cannot attend</option>
            </select>
          </div>

          {/* Number of Guests */}
          <div>
            <label htmlFor="guests" className="block font-libre-baskerville text-lg mb-2">
              Number of Guests
            </label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--foreground)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
            >
              <option value="">Please select...</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
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
              className="w-full px-4 py-3 border border-[var(--foreground)] rounded-lg bg-transparent font-libre-baskerville focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
            />
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
              className="bg-[var(--foreground)] text-[var(--background)] px-12 py-4 rounded-lg font-libre-baskerville text-lg hover:bg-opacity-90 transition-colors duration-300"
            >
              Send RSVP
            </button>
          </div>
        </form>

        {/* RSVP Deadline */}
        <div className="text-center mt-12 p-6 border border-[var(--foreground)] rounded-lg">
          <p className="font-libre-baskerville text-lg">
            Please RSVP by <span className="font-semibold">August 1st, 2026</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVP; 