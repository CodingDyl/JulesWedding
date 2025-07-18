const Footer = () => {
  return (
    <footer className="py-16 px-8 bg-[var(--foreground)] text-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-dancing-script text-3xl mb-6">Contact Us</h3>
            <div className="space-y-3 font-libre-baskerville">
              <p>Justin & Julia</p>
              <p>Email: justin.julia@email.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>

          {/* Wedding Details */}
          <div>
            <h3 className="font-dancing-script text-3xl mb-6">Wedding Details</h3>
            <div className="space-y-3 font-libre-baskerville">
              <p>May 9th, 2026</p>
              <p>4:30 PM Ceremony</p>
              <p>6:00 PM Reception</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-dancing-script text-3xl mb-6">Quick Links</h3>
            <div className="space-y-3 font-libre-baskerville">
              <a href="#our-story" className="block hover:underline">Our Story</a>
              <a href="#event" className="block hover:underline">Event Details</a>
              <a href="#travel-stay" className="block hover:underline">Travel & Stay</a>
              <a href="#rsvp" className="block hover:underline">RSVP</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--background)] mt-12 pt-8 text-center">
          <p className="font-libre-baskerville text-sm">
            © 2026 Justin & Julia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 