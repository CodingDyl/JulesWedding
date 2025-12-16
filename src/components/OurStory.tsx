import Image from "next/image";
import { hero_image_1 } from "../assets";
import just_1 from "../assets/just_1.jpeg";
import just_2 from "../assets/just_2.jpeg";

const OurStory = () => {
  return (
    <section id="our-story" className="py-16 md:py-20 px-4 md:px-8 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--text-accent)] mb-4">
            Our Story
          </h2>
          <div className="w-24 h-px bg-[var(--foreground)] mx-auto"></div>
        </div>

        {/* Story Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="space-y-6">
            <p className="font-libre-baskerville text-lg leading-relaxed">
              On a rainy Easter weekend, in the middle of the Free State, Justin found himself sitting next to Jules at the Lush music festival. One well placed reference to Brooklyn 99 led to us spending the entire weekend together, jolling and having the best time.
            </p>
            <p className="font-libre-baskerville text-lg leading-relaxed">
              Justin "just happened" to be in Linden the next week and after a wonderful date at the Whippet, we couldn't let a few days go by without seeing each other (though we both tried to deny that we were dating). A year later we finally made it official and it has been 6 incredible years since then.
            </p>
            <p className="font-libre-baskerville text-lg leading-relaxed">
              We moved into our apartment in 2023 and continued building our wonderful life together. On 25 January 2025, on the most beautiful mountain in Bantry Bay, Justin got down on one knee and Jules said yes to spending the rest of their lives together.
            </p>
            <p className="font-libre-baskerville text-lg leading-relaxed">
              We can't wait for so many more years of bringing out the best in each other, surrounded by the people we love most in the world.
            </p>
          </div>
          
          {/* Photo Collage - Desktop */}
          <div className="hidden md:block relative h-[450px] md:h-[500px] lg:h-[600px]">
            {/* Main Image */}
            <div className="absolute top-0 left-0 md:left-8 z-10">
              <div className="bg-white p-2 rounded shadow-xl rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                <Image
                  src={hero_image_1}
                  alt="Justin and Jules"
                  width={320}
                  height={400}
                  className="object-cover rounded w-[220px] h-[275px] md:w-[260px] md:h-[320px] lg:w-[320px] lg:h-[400px]"
                />
              </div>
              <div className="absolute -bottom-2 left-4 bg-[var(--text-accent)] text-[var(--bg-primary)] px-4 py-2 rounded-lg">
                <span className="font-dancing-script text-base md:text-lg">2025 | Cape Town</span>
              </div>
            </div>
            
            {/* Secondary Image - Top Right */}
            <div className="absolute top-4 right-0 md:right-0 z-20">
              <div className="bg-white p-2 rounded shadow-xl rotate-[6deg] hover:rotate-0 transition-transform duration-300">
                <Image
                  src={just_1}
                  alt="Justin and Julia"
                  width={160}
                  height={200}
                  className="object-cover rounded w-[120px] h-[150px] md:w-[140px] md:h-[175px] lg:w-[160px] lg:h-[200px]"
                />
              </div>
            </div>
            
            {/* Tertiary Image - Bottom Right */}
            <div className="absolute bottom-8 right-4 md:right-12 z-30">
              <div className="bg-white p-2 rounded shadow-xl rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
                <Image
                  src={just_2}
                  alt="Justin and Julia"
                  width={180}
                  height={220}
                  className="object-cover rounded w-[130px] h-[160px] md:w-[150px] md:h-[185px] lg:w-[180px] lg:h-[220px]"
                />
              </div>
            </div>
          </div>
          
          {/* Photo Collage - Mobile */}
          <div className="sm:hidden flex flex-col items-center gap-6">
            {/* Main Image */}
            <div className="relative">
              <div className="bg-white p-2 rounded shadow-xl">
                <Image
                  src={hero_image_1}
                  alt="Justin and Jules"
                  width={280}
                  height={350}
                  className="object-cover rounded w-[280px] h-[350px]"
                />
              </div>
              <div className="absolute -bottom-2 left-4 bg-[var(--text-accent)] text-[var(--bg-primary)] px-4 py-2 rounded-lg">
                <span className="font-dancing-script text-base">2025 | Cape Town</span>
              </div>
            </div>
            
            {/* Secondary Images - stacked vertically */}
            <div className="flex flex-col items-center gap-6 mt-4">
              <div className="bg-white p-2 rounded shadow-lg rotate-[-2deg]">
                <Image
                  src={just_1}
                  alt="Justin and Julia"
                  width={280}
                  height={350}
                  className="object-cover rounded w-[280px] h-[350px]"
                />
              </div>
              <div className="bg-white p-2 rounded shadow-lg rotate-[2deg]">
                <Image
                  src={just_2}
                  alt="Justin and Julia"
                  width={280}
                  height={350}
                  className="object-cover rounded w-[280px] h-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory; 