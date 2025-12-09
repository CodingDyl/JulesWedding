import Image from "next/image";
import just_5 from "../assets/just_5.jpeg";
import just_6 from "../assets/just_6.jpeg";

const TravelStay = () => {
  return (
    <section id="travel-stay" className="py-16 md:py-20 px-4 md:px-8 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--text-accent)] mb-4">
            Travel & Stay
          </h2>
          <p className="font-libre-baskerville text-lg mb-4 mt-2">
          We have reached out to those guests who will be staying at the venue, please see below recommended accommodation for those guests not staying at the venue
          </p>
          <div className="w-24 h-px bg-[var(--foreground)] mx-auto"></div>
        </div>

        {/* Accommodation Options */}
        <div className="space-y-8 mb-16">
          {/* Close Accommodations */}
          <div>
            {/* Mobile: Images above heading */}
            <div className="flex justify-center gap-4 mb-4 md:hidden">
              <div className="bg-white p-1.5 rounded shadow-lg rotate-[-4deg]">
                <Image
                  src={just_5}
                  alt="Justin and Julia"
                  width={70}
                  height={88}
                  className="object-cover rounded w-[70px] h-[88px]"
                />
              </div>
              <div className="bg-white p-1.5 rounded shadow-lg rotate-[4deg]">
                <Image
                  src={just_6}
                  alt="Justin and Julia"
                  width={70}
                  height={88}
                  className="object-cover rounded w-[70px] h-[88px]"
                />
              </div>
            </div>
            
            {/* Desktop: Images alongside heading */}
            <div className="flex items-center justify-center gap-8 mb-6">
              {/* Left image - desktop only */}
              <div className="hidden md:block">
                <div className="bg-white p-2 rounded shadow-lg rotate-[-4deg] hover:rotate-0 transition-transform duration-300">
                  <Image
                    src={just_5}
                    alt="Justin and Julia"
                    width={100}
                    height={125}
                    className="object-cover rounded w-[80px] h-[100px]"
                  />
                </div>
              </div>
              
              <h3 className="font-dancing-script text-3xl text-[var(--text-accent)] text-center">
                Close to Venue
              </h3>
              
              {/* Right image - desktop only */}
              <div className="hidden md:block">
                <div className="bg-white p-2 rounded shadow-lg rotate-[4deg] hover:rotate-0 transition-transform duration-300">
                  <Image
                    src={just_6}
                    alt="Justin and Julia"
                    width={100}
                    height={125}
                    className="object-cover rounded w-[80px] h-[100px]"
                  />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Accommodation Option 1 */}
              <div className="border border-[var(--text-main)] rounded-lg p-8 bg-[var(--bg-secondary)]/5">
                <h4 className="font-dancing-script text-2xl text-[var(--text-accent)] mb-4">
                  Dunelm Gasteplaas | Guest Farm
                </h4>
                <div className="space-y-4 mb-6">
                  <p className="font-libre-baskerville text-lg">
                    Situated near Clarens in the center of the mountainous Brandwater Basin, this spectacular guest farm offers luxury self-catering chalets with two en-suite bedrooms, kitchen, lounge and private patio with braai area.
                  </p>
                  <div className="space-y-2">
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Accommodation:</span> Two-bedroom cottages (sleeps 4-5), One-bedroom cottages (sleeps 2), Hide Away (sleeps 2)
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Activities:</span> Game drives, hunting, 4×4 routes, hiking, farm animal experiences
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Contact:</span> +27 (76) 584-3302
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Email:</span> bookings@dunelm.co.za
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Distance from Venue:</span> Approximately 5-10 km from Oranje Guest Farm
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Google Rating:</span> 4.9
                    </p>
                  </div>
                </div>
                <a 
                  href="https://dunelm.co.za" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[var(--text-accent)] text-[var(--bg-primary)] inline-block px-6 py-2 rounded hover:bg-[var(--text-main)] transition-colors"
                >
                  <span className="font-libre-baskerville text-sm">Visit Website →</span>
                </a>
              </div>

              {/* Accommodation Option 2 */}
              <div className="border border-[var(--text-main)] rounded-lg p-8 bg-[var(--bg-secondary)]/5">
                <h4 className="font-dancing-script text-2xl text-[var(--text-accent)] mb-4">
                  Lesoba Guest Farm
                </h4>
                <div className="space-y-4 mb-6">
                  <p className="font-libre-baskerville text-lg">
                  Nestled in the rugged majesty of the Eastern Free State, between the artistic haven of Clarens (just 23 km away) and the quaint charm of Fouriesburg (13 km away), Lesoba Guest Farm offers a true haven for nature lovers, hikers, and those seeking solace from the chaos of everyday life.
                  </p>
                  <div className="space-y-2">
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Contact:</span> 0726600840
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Email:</span> lesobafarm@gmail.com
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Distance from Venue:</span> Approximately 5-10 km from Oranje Guest Farm
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Google Rating:</span> 4.7
                    </p>
                  </div>
                </div>
                <a 
                  href="https://lesobaguestfarm.co.za" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[var(--text-accent)] text-[var(--bg-primary)] inline-block px-6 py-2 rounded hover:bg-[var(--text-main)] transition-colors"
                >
                  <span className="font-libre-baskerville text-sm">Visit Website →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Further Accommodations */}
          <div>
            <h3 className="font-dancing-script text-3xl text-[var(--text-accent)] mb-6 text-center">
              Further from Venue
            </h3>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Accommodation Option 3 */}
              <div className="border border-[var(--text-main)] rounded-lg p-8 bg-[var(--bg-secondary)]/5">
                <h4 className="font-dancing-script text-2xl text-[var(--text-accent)] mb-4">
                  Knock Out View | Clarens
                </h4>
                <div className="space-y-4 mb-6">
                  <p className="font-libre-baskerville text-lg">
                    A cozy guesthouse in Clarens offering exceptional amenities and unparalleled mountain views. Features overnight rooms and self-catering units with a perfect blend of luxury, natural beauty and hospitality.
                  </p>
                  <div className="space-y-2">
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Rooms:</span> Faith, Love, Hope (2 guests, from R780), Peace, Joy (4 guests, from R1640)
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Contact:</span> 082 084 2863
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Email:</span> info@clarens-knockoutview.co.za
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Distance from Venue:</span> Approximately 15-20 km from Oranje Guest Farm
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-bold">Please Note:</span> This venue only accepts a minimum of 4 nights stay
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Google Rating:</span> 4.4
                    </p>
                  </div>
                </div>
                <a 
                  href="https://clarens-knockoutview.co.za" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[var(--text-accent)] text-[var(--bg-primary)] inline-block px-6 py-2 rounded hover:bg-[var(--text-main)] transition-colors"
                >
                  <span className="font-libre-baskerville text-sm">Visit Website →</span>
                </a>
              </div>

              {/* Accommodation Option 4 */}
              <div className="border border-[var(--text-main)] rounded-lg p-8 bg-[var(--bg-secondary)]/5">
                <h4 className="font-dancing-script text-2xl text-[var(--text-accent)] mb-4">
                  Mafube Mountain Retreat
                </h4>
                <div className="space-y-4 mb-6">
                  <p className="font-libre-baskerville text-lg">
                    Uniquely positioned in a semi-circle of red and yellow sandstone mountains, Mafube Mountain Retreat offers a hikers and nature lover's paradise. Conveniently situated between Clarens and Fouriesburg in the Eastern Free State.
                  </p>
                  <div className="space-y-2">
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Accommodation:</span> Chalets, rondavels, garden units, and camping options available
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Activities:</span> Hiking trails, mountain paths, waterfalls, caves, bird watching, fishing, canoeing
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Contact:</span> 084 668 4499
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Email:</span> mafube.retreat@gmail.com
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Distance from Venue:</span> Approximately 20-25 km from Oranje Guest Farm
                    </p>
                    <p className="font-libre-baskerville text-sm">
                      <span className="font-semibold">Google Rating:</span> 4.7
                    </p>
                  </div>
                </div>
                <a 
                  href="https://mafubemountainretreat.co.za" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[var(--text-accent)] text-[var(--bg-primary)] inline-block px-6 py-2 rounded hover:bg-[var(--text-main)] transition-colors"
                >
                  <span className="font-libre-baskerville text-sm">Visit Website →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelStay; 