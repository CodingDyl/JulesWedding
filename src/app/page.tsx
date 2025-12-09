import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import OurStory from "../components/OurStory";
import EventDetails from "../components/EventDetails";
import TravelStay from "../components/TravelStay";
import Registry from "../components/Registry";
import SpotifyList from "../components/SpotifyList";
import FAQ from "../components/FAQ";
import RSVP from "../components/RSVP";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans relative">
      {/* Global Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bg_image.png"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[var(--background)]/60" />
      </div>
      
      {/* Content - all sections will be above the background */}
      <div className="relative z-10">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Countdown */}
      <Countdown />
      
      {/* Our Story */}
      <OurStory />
      
      {/* Event Details */}
      <EventDetails />
      
      {/* Travel & Stay */}
      <TravelStay />
      
      {/* Registry */}
      <Registry />
      
      {/* Song Requests */}
      <SpotifyList />
      
      {/* FAQs */}
      <FAQ />
      
      {/* RSVP */}
      <RSVP />
      
      {/* Footer */}
      <Footer />
      </div>
    </div>
  );
}
