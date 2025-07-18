const TravelStay = () => {
  return (
    <section id="travel-stay" className="py-20 px-8 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--foreground)] mb-4">
            Travel & Stay
          </h2>
          <div className="w-24 h-px bg-[var(--foreground)] mx-auto"></div>
        </div>

        {/* Accommodation Options */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Hotel Option 1 */}
          <div className="border border-[var(--foreground)] rounded-lg p-8">
            <h3 className="font-dancing-script text-3xl text-[var(--foreground)] mb-4">
              The Grand Hotel
            </h3>
            <div className="space-y-4 mb-6">
              <p className="font-libre-baskerville text-lg">
                Luxury accommodations in the heart of downtown, just minutes from both ceremony and reception venues.
              </p>
              <div className="space-y-2">
                <p className="font-libre-baskerville text-sm">
                  <span className="font-semibold">Address:</span> 789 Luxury Boulevard
                </p>
                <p className="font-libre-baskerville text-sm">
                  <span className="font-semibold">Phone:</span> (555) 123-4567
                </p>
                <p className="font-libre-baskerville text-sm">
                  <span className="font-semibold">Rate:</span> $199/night
                </p>
              </div>
            </div>
            <div className="bg-[var(--foreground)] text-[var(--background)] inline-block px-6 py-2 rounded">
              <span className="font-libre-baskerville text-sm">Mention "Justin & Julia Wedding" for special rate</span>
            </div>
          </div>

          {/* Hotel Option 2 */}
          <div className="border border-[var(--foreground)] rounded-lg p-8">
            <h3 className="font-dancing-script text-3xl text-[var(--foreground)] mb-4">
              Boutique Inn
            </h3>
            <div className="space-y-4 mb-6">
              <p className="font-libre-baskerville text-lg">
                Charming boutique hotel with personalized service and elegant rooms.
              </p>
              <div className="space-y-2">
                <p className="font-libre-baskerville text-sm">
                  <span className="font-semibold">Address:</span> 321 Cozy Lane
                </p>
                <p className="font-libre-baskerville text-sm">
                  <span className="font-semibold">Phone:</span> (555) 987-6543
                </p>
                <p className="font-libre-baskerville text-sm">
                  <span className="font-semibold">Rate:</span> $149/night
                </p>
              </div>
            </div>
            <div className="bg-[var(--foreground)] text-[var(--background)] inline-block px-6 py-2 rounded">
              <span className="font-libre-baskerville text-sm">Mention "Justin & Julia Wedding" for special rate</span>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--foreground)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-[var(--background)] text-2xl">🚗</span>
            </div>
            <h4 className="font-libre-baskerville text-xl mb-2">Rental Cars</h4>
            <p className="font-libre-baskerville text-sm">
              Enterprise, Hertz, and Avis available at the airport
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--foreground)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-[var(--background)] text-2xl">🚕</span>
            </div>
            <h4 className="font-libre-baskerville text-xl mb-2">Rideshare</h4>
            <p className="font-libre-baskerville text-sm">
              Uber and Lyft available throughout the city
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--foreground)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-[var(--background)] text-2xl">🚌</span>
            </div>
            <h4 className="font-libre-baskerville text-xl mb-2">Shuttle Service</h4>
            <p className="font-libre-baskerville text-sm">
              Complimentary shuttle between venues
            </p>
          </div>
        </div>

        {/* Airport Information */}
        <div className="text-center p-8 border border-[var(--foreground)] rounded-lg max-w-2xl mx-auto">
          <h3 className="font-dancing-script text-3xl text-[var(--foreground)] mb-4">
            Airport Information
          </h3>
          <div className="space-y-2">
            <p className="font-libre-baskerville text-lg">
              <span className="font-semibold">City International Airport (CIA)</span>
            </p>
            <p className="font-libre-baskerville text-sm">
              Approximately 20 minutes from downtown
            </p>
            <p className="font-libre-baskerville text-sm">
              Major airlines: Delta, American, United, Southwest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelStay; 