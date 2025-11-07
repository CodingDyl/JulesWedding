'use client'
import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2026-05-09T16:30:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-8 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-dancing-script text-4xl md:text-6xl text-[var(--text-accent)] mb-8">
          Counting Down to Our Special Day
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-[var(--text-accent)] text-[var(--bg-primary)] rounded-lg p-6 mb-4">
              <div className="font-dancing-script text-3xl md:text-4xl font-bold">
                {timeLeft.days}
              </div>
            </div>
            <p className="font-libre-baskerville text-lg">Days</p>
          </div>
          
          <div className="text-center">
            <div className="bg-[var(--text-accent)] text-[var(--bg-primary)] rounded-lg p-6 mb-4">
              <div className="font-dancing-script text-3xl md:text-4xl font-bold">
                {timeLeft.hours}
              </div>
            </div>
            <p className="font-libre-baskerville text-lg">Hours</p>
          </div>
          
          <div className="text-center">
            <div className="bg-[var(--text-accent)] text-[var(--bg-primary)] rounded-lg p-6 mb-4">
              <div className="font-dancing-script text-3xl md:text-4xl font-bold">
                {timeLeft.minutes}
              </div>
            </div>
            <p className="font-libre-baskerville text-lg">Minutes</p>
          </div>
          
          <div className="text-center">
            <div className="bg-[var(--text-accent)] text-[var(--bg-primary)] rounded-lg p-6 mb-4">
              <div className="font-dancing-script text-3xl md:text-4xl font-bold">
                {timeLeft.seconds}
              </div>
            </div>
            <p className="font-libre-baskerville text-lg">Seconds</p>
          </div>
        </div>
        
        <p className="font-libre-baskerville text-xl mt-8">
          Until we say "I do"
        </p>
      </div>
    </section>
  );
};

export default Countdown; 