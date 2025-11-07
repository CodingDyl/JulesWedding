import Image from "next/image";
import { hero_image_1 } from "../assets";

const OurStory = () => {
  return (
    <section id="our-story" className="py-20 px-8 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--text-accent)] mb-4">
            Our Story
          </h2>
          <div className="w-24 h-px bg-[var(--foreground)] mx-auto"></div>
        </div>

        {/* Story Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
          <div className="relative">
            <Image
              src={hero_image_1}
              alt="Justin and Jules"
              width={500}
              height={600}
              className="object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-[var(--text-accent)] text-[var(--bg-primary)] px-6 py-3 rounded-lg">
              <span className="font-dancing-script text-xl">2025 | Cape Town, South Africa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory; 