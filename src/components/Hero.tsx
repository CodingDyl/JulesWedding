import Image from "next/image";
import { hero_image_1, hero_image_2, hero_image_3 } from "../assets";
const Hero = () => (
  <main className="min-h-screen flex-1 flex flex-col px-8 items-center justify-center">
    {/* Date */}
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Date Overlay */}
      <div className="w-full h-full flex items-center justify-center mb-8 md:mb-0 md:absolute md:-top-1/3">
        <span className="font-dancing-script text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-[var(--text-accent)] tracking-widest text-center px-4 sm:px-8 py-4">
          09 · 05 · 2026
        </span>
      </div>
      {/* Images Row */}
      <div className="flex items-center justify-center w-full gap-4 sm:gap-8 md:gap-32 lg:gap-64">
        {/* Left Image */}
        <div className="hidden sm:block">
          <Image
            src={hero_image_2}
            alt="wedding left"
            width={300}
            height={300}
            className="object-cover rounded shadow-lg w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
          />
        </div>
        {/* Center Image */}
        <div className="flex flex-col items-center">
          <div>
            <Image
              src={hero_image_1}
              alt="wedding center"
              width={500}
              height={625}
              className="object-cover rounded shadow-xl w-[300px] sm:w-[400px] md:w-[500px]"
            />
          </div>
        </div>
        {/* Right Image */}
        <div className="hidden sm:block">
          <Image
            src={hero_image_3}
            alt="wedding right"
            width={300}
            height={300}
            className="object-cover rounded shadow-lg w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
          />
        </div>
      </div>
    </div>
  </main>
);

export default Hero; 