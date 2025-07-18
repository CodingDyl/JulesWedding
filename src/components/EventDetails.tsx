const EventDetails = () => {
  return (
    <section id="event" className="py-20 px-8 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--foreground)] mb-4">
            Event Details
          </h2>
          <div className="w-24 h-px bg-[var(--foreground)] mx-auto"></div>
        </div>

        {/* Date and Time */}
        <div className="text-center mb-16">
          <div className="bg-[var(--foreground)] text-[var(--background)] inline-block px-8 py-4 rounded-lg mb-6">
            <h3 className="font-dancing-script text-3xl md:text-4xl">May 9th, 2026</h3>
            <p className="font-libre-baskerville text-lg mt-2">Saturday Evening</p>
          </div>
        </div>

        {/* Event Schedule */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Ceremony */}
          <div className="text-center p-8 border border-[var(--foreground)] rounded-lg">
            <div className="mb-6">
              <h3 className="font-dancing-script text-3xl text-[var(--foreground)] mb-2">
                Ceremony
              </h3>
              <div className="w-16 h-px bg-[var(--foreground)] mx-auto"></div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-libre-baskerville text-xl font-semibold">4:00 PM</h4>
                <p className="font-libre-baskerville text-lg">Arrival & Welcome</p>
              </div>
              <div>
                <h4 className="font-libre-baskerville text-xl font-semibold">4:30 PM</h4>
                <p className="font-libre-baskerville text-lg">Ceremony Begins</p>
              </div>
              <div className="pt-4">
                <h5 className="font-libre-baskerville text-lg font-semibold">St. Mary's Cathedral</h5>
                <p className="font-libre-baskerville text-sm">123 Church Street</p>
                <p className="font-libre-baskerville text-sm">Downtown, City</p>
              </div>
            </div>
          </div>

          {/* Reception */}
          <div className="text-center p-8 border border-[var(--foreground)] rounded-lg">
            <div className="mb-6">
              <h3 className="font-dancing-script text-3xl text-[var(--foreground)] mb-2">
                Reception
              </h3>
              <div className="w-16 h-px bg-[var(--foreground)] mx-auto"></div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-libre-baskerville text-xl font-semibold">6:00 PM</h4>
                <p className="font-libre-baskerville text-lg">Cocktail Hour</p>
              </div>
              <div>
                <h4 className="font-libre-baskerville text-xl font-semibold">7:00 PM</h4>
                <p className="font-libre-baskerville text-lg">Dinner & Dancing</p>
              </div>
              <div className="pt-4">
                <h5 className="font-libre-baskerville text-lg font-semibold">The Grand Ballroom</h5>
                <p className="font-libre-baskerville text-sm">456 Luxury Avenue</p>
                <p className="font-libre-baskerville text-sm">Downtown, City</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dress Code */}
        <div className="text-center p-8 border border-[var(--foreground)] rounded-lg max-w-2xl mx-auto">
          <h3 className="font-dancing-script text-3xl text-[var(--foreground)] mb-4">
            Dress Code
          </h3>
          <p className="font-libre-baskerville text-xl mb-2">Black Tie Optional</p>
          <p className="font-libre-baskerville text-lg text-gray-600">
            Formal attire requested. Dark suits, cocktail dresses, or evening gowns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails; 