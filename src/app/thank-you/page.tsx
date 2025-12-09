'use client'
import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
  // Google Calendar link for the wedding
  const addToCalendar = () => {
    const event = {
      text: "Justin & Julia's Wedding",
      dates: "20260509T140000/20260509T230000", // May 9, 2026, 2:00 PM to 11:00 PM
      details: "Join us for our wedding celebration! Ceremony at 2:00 PM, followed by reception.",
      location: "Oranje Guest Farm, Clarens, Free State, South Africa",
    };
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans relative">
      {/* Global Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bg_image.png"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[var(--background)]/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Thank You Message */}
          <div className="mb-12">
            <h1 className="font-dancing-script text-5xl md:text-6xl lg:text-8xl text-[var(--text-accent)] mb-8">
              Thank You!
            </h1>
            <div className="w-32 h-px bg-[var(--foreground)] mx-auto mb-8"></div>
            
            <div className="space-y-6 mb-12">
              <p className="font-libre-baskerville text-xl md:text-2xl leading-relaxed">
                Thank you so much for taking the time to RSVP!
              </p>
              <p className="font-libre-baskerville text-lg md:text-xl leading-relaxed">
                We are absolutely thrilled to have you join us on our special day. Your presence means the world to us, and we cannot wait to celebrate this incredible milestone with you.
              </p>
              <p className="font-libre-baskerville text-lg md:text-xl leading-relaxed">
                We truly appreciate you being part of our journey and sharing in our joy.
              </p>
            </div>
          </div>

          {/* Wedding Details Card */}
          <div className="border border-[var(--text-main)] rounded-lg p-8 md:p-12 bg-[var(--bg-secondary)]/30 backdrop-blur-sm mb-8">
            <h2 className="font-dancing-script text-4xl text-[var(--text-accent)] mb-6">
              Save the Date
            </h2>
            <div className="space-y-3 font-libre-baskerville text-lg mb-8">
              <p className="text-2xl font-semibold">May 9th, 2026</p>
              <p>Ceremony: 2:00 PM</p>
              <p>Reception to Follow</p>
              <p className="text-[var(--text-main)]">Oranje Guest Farm, Clarens</p>
            </div>

            {/* Add to Calendar Button */}
            <button
              onClick={addToCalendar}
              className="bg-[var(--text-accent)] text-[var(--bg-primary)] px-8 py-4 rounded-lg font-libre-baskerville text-lg hover:bg-[var(--text-main)] transition-colors duration-300 inline-flex items-center gap-3 shadow-lg"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Add to Google Calendar
            </button>
          </div>

          {/* Additional Info */}
          <div className="border border-[var(--text-main)] rounded-lg p-6 bg-[var(--bg-secondary)]/20 mb-8">
            <p className="font-libre-baskerville text-base leading-relaxed">
              If you have any questions or need to update your RSVP, please don't hesitate to reach out to us directly.
            </p>
            <div className="mt-4 space-y-2 font-libre-baskerville text-sm">
              <p><span className="font-semibold">Email:</span> just.s.blume@gmail.com</p>
              <p><span className="font-semibold">Phone:</span> 0713615710</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link 
            href="/"
            className="inline-block border border-[var(--text-accent)] text-[var(--text-accent)] px-8 py-3 rounded-lg font-libre-baskerville hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

