import Image from "next/image";
import { hero_image_1 } from "../assets";

const OurStory = () => {
  return (
    <section id="our-story" className="py-20 px-8 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--foreground)] mb-4">
            Our Story
          </h2>
          <div className="w-24 h-px bg-[var(--foreground)] mx-auto"></div>
        </div>

        {/* Story Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="font-libre-baskerville text-2xl md:text-3xl text-[var(--foreground)]">
              How We Met
            </h3>
            <p className="font-libre-baskerville text-lg leading-relaxed">
              It was a crisp autumn evening in 2018 when our paths first crossed at a local coffee shop. 
              Justin was reading his favorite book, and Julia couldn't help but notice the way his eyes 
              lit up when he talked about literature. What started as a simple conversation about books 
              turned into hours of laughter and shared dreams.
            </p>
            <p className="font-libre-baskerville text-lg leading-relaxed">
              From that moment on, we knew we had found something special. Our love story has been filled 
              with countless adventures, quiet moments, and the kind of deep connection that only comes 
              from truly understanding another soul.
            </p>
          </div>
          <div className="relative">
            <Image
              src={hero_image_1}
              alt="Justin and Julia"
              width={500}
              height={600}
              className="object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-[var(--foreground)] text-[var(--background)] px-6 py-3 rounded-lg">
              <span className="font-dancing-script text-xl">2018</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--foreground)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-dancing-script text-2xl text-[var(--background)]">1</span>
              </div>
              <h4 className="font-libre-baskerville text-xl mb-2">First Date</h4>
              <p className="font-libre-baskerville text-sm">A magical evening at the botanical gardens</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--foreground)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-dancing-script text-2xl text-[var(--background)]">2</span>
              </div>
              <h4 className="font-libre-baskerville text-xl mb-2">Moving In</h4>
              <p className="font-libre-baskerville text-sm">Building our first home together</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--foreground)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-dancing-script text-2xl text-[var(--background)]">3</span>
              </div>
              <h4 className="font-libre-baskerville text-xl mb-2">The Proposal</h4>
              <p className="font-libre-baskerville text-sm">Under the stars at our favorite spot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory; 