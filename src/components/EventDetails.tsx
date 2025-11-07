const EventDetails = () => {
  return (
    <section id="event" className="py-20 px-8 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--text-accent)] mb-4">
            Event Details
          </h2>
          <div className="w-24 h-px bg-[var(--foreground)] mx-auto"></div>
        </div>

        {/* Date and Time */}
        <div className="text-center mb-16">
          <div className="bg-[var(--text-accent)] text-[var(--bg-primary)] inline-block px-8 py-4 rounded-lg mb-6">
            <h3 className="font-dancing-script text-3xl md:text-4xl">May 9th, 2026</h3>
            <p className="font-libre-baskerville text-lg mt-2">Saturday Evening</p>
          </div>
        </div>

        {/* Event Schedule */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Friday Night */}
          <div className="text-center p-8 border border-[var(--text-main)] rounded-lg bg-[var(--bg-secondary)]/10">
            <div className="mb-6">
              <h3 className="font-dancing-script text-3xl text-[var(--text-accent)] mb-2">
                Friday Night
              </h3>
              <div className="w-16 h-px bg-[var(--foreground)] mx-auto"></div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-libre-baskerville text-xl font-semibold">4:00 PM</h4>
                <p className="font-libre-baskerville text-lg">Braai Begins</p>
              </div>
              <div className="pt-4">
                <h5 className="font-libre-baskerville text-lg font-semibold">Oranje Guest Farm</h5>
                <p className="font-libre-baskerville text-sm">Drinks will be provided</p>
                <p className="font-libre-baskerville text-sm italic">Please bring your own meat</p>
              </div>
            </div>
          </div>

          {/* Ceremony */}
          <div className="text-center p-8 border border-[var(--text-main)] rounded-lg bg-[var(--bg-secondary)]/10">
            <div className="mb-6">
              <h3 className="font-dancing-script text-3xl text-[var(--text-accent)] mb-2">
                Ceremony
              </h3>
              <div className="w-16 h-px bg-[var(--foreground)] mx-auto"></div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-libre-baskerville text-xl font-semibold">3:00 PM</h4>
                <p className="font-libre-baskerville text-lg">Arrival & Seating</p>
              </div>
              <div>
                <h4 className="font-libre-baskerville text-xl font-semibold">3:30 PM</h4>
                <p className="font-libre-baskerville text-lg">Ceremony Begins</p>
              </div>
              <div className="pt-4">
                <h5 className="font-libre-baskerville text-lg font-semibold">At the Venue</h5>
              </div>
            </div>
          </div>

          {/* Reception */}
          <div className="text-center p-8 border border-[var(--text-main)] rounded-lg bg-[var(--bg-secondary)]/10">
            <div className="mb-6">
              <h3 className="font-dancing-script text-3xl text-[var(--text-accent)] mb-2">
                Reception
              </h3>
              <div className="w-16 h-px bg-[var(--foreground)] mx-auto"></div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-libre-baskerville text-xl font-semibold">4:30 PM</h4>
                <p className="font-libre-baskerville text-lg">Canapés at Pool Area</p>
              </div>
              <div>
                <h4 className="font-libre-baskerville text-xl font-semibold">5:30 PM</h4>
                <p className="font-libre-baskerville text-lg">Reception</p>
              </div>
              <div className="pt-4">
                <h5 className="font-libre-baskerville text-lg font-semibold">At the Venue</h5>
                <p className="font-libre-baskerville text-sm">All events on the same venue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dress Code */}
        <div className="text-center p-8 border border-[var(--text-main)] rounded-lg max-w-2xl mx-auto bg-[var(--bg-secondary)]/15">
          <h3 className="font-dancing-script text-3xl text-[var(--text-accent)] mb-4">
            Dress Code
          </h3>
          <p className="font-libre-baskerville text-xl mb-2">Black Tie Optional</p>
          <p className="font-libre-baskerville text-lg text-gray-600 mb-2">
            Formal attire requested. Dark suits, cocktail dresses, or evening gowns.
          </p>
          <p className="font-libre-baskerville text-base text-gray-600 italic">
            Please note: A portion of the wedding will be outside, so heels should be considered optional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails; 