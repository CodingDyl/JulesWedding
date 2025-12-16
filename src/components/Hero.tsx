import Image from "next/image";
import { hero_image_1, hero_image_2, hero_image_3 } from "../assets";
const Hero = () => (
  <main className="min-h-screen flex-1 flex flex-col px-8 items-center justify-center relative overflow-hidden">
    {/* Hero-specific background overlay for 80% opacity */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/bg_image.png"
        alt="Background"
        fill
        className="object-cover opacity-80"
        priority
      />
      <div className="absolute inset-0 bg-[var(--background)]/40" />
    </div>
    {/* Date */}
    <div className="relative z-10 w-full flex flex-col items-center justify-center">
      {/* Mobile Title - Only visible on mobile */}
      <h1 className="sm:hidden font-[Bodoni_Moda] text-3xl tracking-wide text-center mb-6">
        JUSTIN & JULIA
      </h1>
      
      {/* Date Overlay */}
      <div className="w-full h-full flex items-center justify-center mb-8 md:mb-0 md:absolute md:-top-1/3">
        <span className="font-dancing-script text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-[var(--text-accent)] tracking-widest text-center px-4 sm:px-8 py-4">
          09 · 05 · 2026
        </span>
      </div>
      {/* Images Row */}
      <div className="flex items-center justify-center w-full gap-4 sm:gap-6 md:gap-16 lg:gap-32 xl:gap-64">
        {/* Left Image */}
        <div className="hidden sm:block">
          <div className="bg-white p-2 rounded shadow-xl">
            <Image
              src={hero_image_2}
              alt="wedding left"
              width={300}
              height={300}
              className="object-cover rounded w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] xl:w-[300px] xl:h-[300px]"
            />
          </div>
        </div>
        {/* Center Image */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-2 rounded shadow-xl">
            <Image
              src={hero_image_1}
              alt="wedding center"
              width={500}
              height={625}
              className="object-cover rounded w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[380px] md:h-[475px] lg:w-[450px] lg:h-[562px] xl:w-[500px] xl:h-[625px]"
            />
          </div>
        </div>
        {/* Right Image */}
        <div className="hidden sm:block">
          <div className="bg-white p-2 rounded shadow-xl">
            <Image
              src={hero_image_3}
              alt="wedding right"
              width={300}
              height={300}
              className="object-cover rounded w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] xl:w-[300px] xl:h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Hero; 