'use client'
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-8 pt-8 text-md tracking-widest uppercase font-semibold">
      {/* Left Menu - Desktop Only */}
      <div className="hidden sm:flex gap-8">
        <a href="#our-story" className="hover:underline">OUR STORY</a>
        <a href="#travel-stay" className="hover:underline">TRAVEL & STAY</a>
        <a href="#info" className="hover:underline">INFO</a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="sm:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-[var(--foreground)] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-0.5 bg-[var(--foreground)] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-[var(--foreground)] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Logo - Centered */}
      <h1 className="absolute left-1/2 -translate-x-1/2 font-[Bodoni Moda] text-2xl sm:text-4xl tracking-wide text-center pointer-events-none">
        JUSTIN & JULIA
      </h1>

      {/* Right Menu - Desktop Only */}
      <div className="hidden sm:flex gap-6 items-center">
        <a href="#faqs" className="hover:underline">FAQS</a>
        <a href="#rsvp" className="border border-[var(--foreground)] px-4 py-1 rounded hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">RSVP</a>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-[var(--background)] z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
          <a href="#our-story" className="hover:underline" onClick={() => setIsMenuOpen(false)}>OUR STORY</a>
          <a href="#travel-stay" className="hover:underline" onClick={() => setIsMenuOpen(false)}>TRAVEL & STAY</a>
          <a href="#info" className="hover:underline" onClick={() => setIsMenuOpen(false)}>INFO</a>
          <a href="#faqs" className="hover:underline" onClick={() => setIsMenuOpen(false)}>FAQS</a>
          <a href="#rsvp" className="border border-[var(--foreground)] px-6 py-2 rounded hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors" onClick={() => setIsMenuOpen(false)}>RSVP</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 