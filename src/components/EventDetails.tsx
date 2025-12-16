import Image from "next/image";
import just_3 from "../assets/just_3.jpeg";
import just_4 from "../assets/just_4.jpeg";

const EventDetails = () => {
  return (
    <section id="event" className="py-16 md:py-20 px-4 md:px-8 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--text-accent)] mb-4">
            Event Details
          </h2>
          <div className="w-24 h-px bg-[var(--foreground)] mx-auto"></div>
        </div>

        {/* Date and Time with Images */}
        <div className="text-center mb-12 md:mb-16">
          {/* Mobile: Images above date - stacked vertically */}
          <div className="flex flex-col items-center gap-6 mb-6 lg:hidden">
            <div className="bg-white p-2 rounded shadow-lg rotate-[-2deg]">
              <Image
                src={just_3}
                alt="Justin and Julia"
                width={280}
                height={350}
                className="object-cover rounded w-[280px] h-[350px]"
              />
            </div>
            <div className="bg-white p-2 rounded shadow-lg rotate-[2deg]">
              <Image
                src={just_4}
                alt="Justin and Julia"
                width={280}
                height={350}
                className="object-cover rounded w-[280px] h-[350px]"
              />
            </div>
          </div>
          
          {/* Desktop: Images on sides */}
          <div className="relative">
            {/* Left decorative image - desktop only */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2">
              <div className="bg-white p-2 rounded shadow-lg rotate-[-8deg]">
                <Image
                  src={just_3}
                  alt="Justin and Julia"
                  width={140}
                  height={175}
                  className="object-cover rounded w-[120px] h-[150px]"
                />
              </div>
            </div>
            
            <div className="bg-[var(--text-accent)] text-[var(--bg-primary)] inline-block px-8 py-4 rounded-lg mb-6">
              <h3 className="font-dancing-script text-3xl md:text-4xl">May 9th, 2026</h3>
              <p className="font-libre-baskerville text-lg mt-2">Saturday Evening</p>
            </div>
            
            {/* Right decorative image - desktop only */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
              <div className="bg-white p-2 rounded shadow-lg rotate-[6deg]">
                <Image
                  src={just_4}
                  alt="Justin and Julia"
                  width={140}
                  height={175}
                  className="object-cover rounded w-[120px] h-[150px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Event Schedule */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-6">
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
                <p className="font-libre-baskerville text-sm">Please bring your own meat and drinks</p>
              </div>
            </div>
          </div>

          {/* Ceremony */}
          <div className="text-center p-8 border border-[var(--text-main)] rounded-lg bg-[var(--bg-secondary)]/10">
            <div className="mb-6">
              <h3 className="font-dancing-script text-3xl text-[var(--text-accent)] mb-2">
                Saturday Events
              </h3>
              <div className="w-16 h-px bg-[var(--foreground)] mx-auto"></div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-libre-baskerville text-xl font-semibold">2:00 PM</h4>
                <p className="font-libre-baskerville text-lg">Ceremony Begins</p>
              </div>
              <div>
                <h4 className="font-libre-baskerville text-xl font-semibold">After</h4>
                <p className="font-libre-baskerville text-lg">Reception to Follow</p>
              </div>
              <div className="pt-4">
                <h5 className="font-libre-baskerville text-lg font-semibold">Oranje Guest Farm</h5>
              </div>
            </div>
          </div>

          {/* Reception */}
          {/* <div className="text-center p-8 border border-[var(--text-main)] rounded-lg bg-[var(--bg-secondary)]/10">
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
          </div> */}
        </div>

        {/* Dress Code */}
        <div className="text-center p-8 border border-[var(--text-main)] rounded-lg max-w-2xl mx-auto bg-[var(--bg-secondary)]/15">
          <h3 className="font-dancing-script text-3xl text-[var(--text-accent)] mb-4">
            Dress Code
          </h3>
          <p className="font-libre-baskerville text-xl mb-2">Formal Attire</p>
          <p className="font-libre-baskerville text-lg text-gray-600 mb-2">
            Formal attire requested.
          </p>
          <p className="font-libre-baskerville text-base text-gray-600 italic">
            Please note that part of the wedding will be outside so we recommend avoiding stiletto heels for the ladies 
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default EventDetails; 