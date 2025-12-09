'use client'
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 md:px-8 pt-6 md:pt-8 text-sm md:text-md tracking-widest uppercase font-semibold z-50 bg-transparent">
      {/* Left Menu - Desktop Only */}
      <div className="hidden sm:flex gap-4 md:gap-6 lg:gap-8">
        <a href="#our-story" className="hover:underline">OUR STORY</a>
        <a href="#travel-stay" className="hover:underline">TRAVEL & STAY</a>
        <div className="relative group">
          <a href="#info" className="hover:underline">INFO</a>
          <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
            <div className="bg-[var(--bg-primary)]/90 backdrop-blur-sm border border-[var(--text-main)] rounded shadow-lg py-2 min-w-[150px]">
              <a href="#music-requests" className="block px-4 py-2 hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors">SONGS</a>
              <a href="#event" className="block px-4 py-2 hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors">EVENT</a>
              <a href="#registry" className="block px-4 py-2 hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors">REGISTRY</a>
            </div>
          </div>
        </div>
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

      {/* Logo - Centered (Desktop Only) */}
      <h1 className="hidden sm:block absolute left-1/2 -translate-x-1/2 font-[Bodoni Moda] text-xl md:text-3xl lg:text-4xl tracking-wide text-center pointer-events-none z-50">
        JUSTIN & JULIA
      </h1>

      {/* Right Menu - Desktop Only */}
      <div className="hidden sm:flex gap-4 md:gap-6 items-center">
        <a href="#faqs" className="hover:underline">FAQS</a>
        <a href="#rsvp" className="border border-[var(--text-accent)] px-4 py-1 rounded hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors">RSVP</a>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-[var(--background)] z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
          <a href="#our-story" className="hover:underline" onClick={() => setIsMenuOpen(false)}>OUR STORY</a>
          <a href="#travel-stay" className="hover:underline" onClick={() => setIsMenuOpen(false)}>TRAVEL & STAY</a>
          <a href="#info" className="hover:underline" onClick={() => setIsMenuOpen(false)}>INFO</a>
          <a href="#music-requests" className="hover:underline" onClick={() => setIsMenuOpen(false)}>SONGS</a>
          <a href="#event" className="hover:underline" onClick={() => setIsMenuOpen(false)}>EVENT</a>
          <a href="#registry" className="hover:underline" onClick={() => setIsMenuOpen(false)}>REGISTRY</a>
          <a href="#faqs" className="hover:underline" onClick={() => setIsMenuOpen(false)}>FAQS</a>
          <a href="#rsvp" className="border border-[var(--text-accent)] px-6 py-2 rounded hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors" onClick={() => setIsMenuOpen(false)}>RSVP</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 