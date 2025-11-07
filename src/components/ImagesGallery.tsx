'use client';

import React from "react";
import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "./ui/draggable-card";
import just_1 from "../assets/just_1.jpeg";
import just_2 from "../assets/just_2.jpeg";
import just_3 from "../assets/just_3.jpeg";
import just_4 from "../assets/just_4.jpeg";
import just_5 from "../assets/just_5.jpeg";
import just_6 from "../assets/just_6.jpeg";
import just_7 from "../assets/just_7.jpeg";
import just_8 from "../assets/just_8.jpeg";

export default function ImagesGallery() {
  const images = [
    {
      image: just_1,
      alt: "Justin and Julia",
      className: "absolute top-10 left-[10%] rotate-[-5deg]",
    },
    {
      image: just_2,
      alt: "Justin and Julia",
      className: "absolute top-40 left-[20%] rotate-[-7deg]",
    },
    {
      image: just_3,
      alt: "Justin and Julia",
      className: "absolute top-5 left-[35%] rotate-[8deg]",
    },
    {
      image: just_4,
      alt: "Justin and Julia",
      className: "absolute top-32 left-[50%] rotate-[10deg]",
    },
    {
      image: just_5,
      alt: "Justin and Julia",
      className: "absolute top-20 right-[30%] rotate-[2deg]",
    },
    {
      image: just_6,
      alt: "Justin and Julia",
      className: "absolute top-24 left-[40%] rotate-[-7deg]",
    },
    {
      image: just_7,
      alt: "Justin and Julia",
      className: "absolute top-8 left-[25%] rotate-[4deg]",
    },
    {
      image: just_8,
      alt: "Justin and Julia",
      className: "absolute top-36 right-[20%] rotate-[-3deg]",
    },
  ];

  return (
    <section id="gallery" className="py-20 px-8 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--text-accent)] mb-4">
            She Said Yes!
          </h2>
          <div className="w-24 h-px bg-[var(--text-main)] mx-auto"></div>
        </div>

        {/* Draggable Cards Container */}
        <DraggableCardContainer className="relative flex min-h-[600px] md:min-h-[800px] w-full items-center justify-center overflow-visible">
          <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-xl md:text-3xl font-light text-[var(--text-main)]/60 z-0 px-4 pointer-events-none hidden md:block">
            Drag and explore our special day
          </p>
          
          {images.map((item, index) => (
            <DraggableCardBody 
              key={index} 
              className={`hidden sm:block ${item.className} z-20`}
            >
              <div className="bg-[var(--bg-secondary)]/20 border border-[var(--text-main)]/20 rounded-lg p-2 shadow-lg backdrop-blur-sm">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={250}
                  height={300}
                  className="pointer-events-none relative z-10 w-[200px] h-[250px] sm:w-[220px] sm:h-[270px] md:w-[250px] md:h-[300px] object-cover rounded"
                  priority={index < 4}
                />
              </div>
            </DraggableCardBody>
          ))}
          
          {/* Mobile Grid View */}
          <div className="sm:hidden grid grid-cols-2 gap-4 w-full px-4">
            {images.map((item, index) => (
              <div key={index} className="bg-[var(--bg-secondary)]/20 border border-[var(--text-main)]/20 rounded-lg p-2 shadow-lg">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={200}
                  height={250}
                  className="w-full h-[200px] object-cover rounded"
                  priority={index < 4}
                />
              </div>
            ))}
          </div>
        </DraggableCardContainer>
      </div>
    </section>
  );
}

