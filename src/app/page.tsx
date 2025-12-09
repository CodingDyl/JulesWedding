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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans">
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
  );
}
