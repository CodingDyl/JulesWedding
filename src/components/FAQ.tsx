'use client'
import React, { useState } from 'react';
import Image from "next/image";
import just_8 from "../assets/just_8.jpeg";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Will the ceremony and reception be indoors or outdoors?",
      answer: "The ceremony will be held indoors at our venue. The reception will also be indoors, with a beautiful view. Both venues are climate-controlled for your comfort."
    },
    {
      question: "Can I bring a plus one?",
      answer: "Plus ones have been included in the invitation where invited. If you have any questions please feel free to reach out to us directly."
    },
    {
      question: "What will the weather be like?",
      answer: "As the venue is in Clarens in May the weather will be chilly so please bring something warm to wear. We recommend making a stop past the Jacket Shop in Clarens if you haven't been before!"
    },
    {
      question: "Is there parking available?",
      answer: "Parking is available at the venue for those not staying at the venue and the same parking can be used for both the ceremony and the reception. For those staying at the venue, parking is available at the chalets and also closer to the chapel and reception hall."
    },
    {
      question: "Will there be an open bar?",
      answer: "There will be an open bar for certain drinks throughout the reception and a cash bar for hard liquor."
    },
    {
      question: "Are children welcome?",
      answer: "While we love your little ones, we have decided not to have any children at our celebration."
    },
    {
      question: "Can I take photos during the ceremony?",
      answer: "We're having an unplugged ceremony, which means we kindly ask that you put away phones and cameras during the ceremony. Our professional photographer will capture all the special moments, and we're happy to share those photos with you afterward. Feel free to take photos during the reception!"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 md:py-20 px-4 md:px-8 bg-transparent relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--text-accent)] mb-4">
            FAQs
          </h2>
          <div className="w-24 h-px bg-[var(--foreground)] mx-auto mb-6"></div>
          <p className="font-libre-baskerville text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We've compiled answers to some common questions. If you have additional questions, please don't hesitate to reach out to us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
                className="border border-[var(--text-main)] rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-[var(--bg-secondary)]/30 transition-colors duration-300 hover:cursor-pointer"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="font-libre-baskerville text-lg md:text-xl font-semibold text-[var(--text-main)] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-[var(--text-main)] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 md:px-8 md:py-6 bg-[var(--bg-secondary)]/20 border-t border-[var(--text-main)]/20">
                  <p className="font-libre-baskerville text-base md:text-lg leading-relaxed text-[var(--text-main)]/90">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="border border-[var(--text-main)] rounded-lg p-8 max-w-2xl mx-auto bg-[var(--bg-secondary)]/10">
            {/* Decorative image */}
            <div className="flex justify-center mb-6">
              <div className="bg-white p-2 rounded shadow-lg rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                <Image
                  src={just_8}
                  alt="Justin and Julia"
                  width={280}
                  height={350}
                  className="object-cover rounded w-[280px] h-[350px]"
                />
              </div>
            </div>
            <h3 className="font-dancing-script text-3xl text-[var(--text-accent)] mb-4">
              Still Have Questions?
            </h3>
            <p className="font-libre-baskerville text-lg leading-relaxed mb-4">
              We'd love to hear from you! If you have any other questions or concerns, please don't hesitate to reach out to us.
            </p>
            <div className="space-y-2 font-libre-baskerville">
              <p className="text-[var(--text-main)]">
                <span className="font-semibold">Email:</span> just.s.blume@gmail.com
              </p>
              <p className="text-[var(--text-main)]">
                <span className="font-semibold">Phone:</span> 0713615710
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
