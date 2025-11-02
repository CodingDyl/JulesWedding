'use client'
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What time should I arrive?",
      answer: "Please arrive by 4:00 PM for the ceremony. The ceremony will begin promptly at 4:30 PM. We recommend arriving a bit early to find parking and get seated comfortably."
    },
    {
      question: "What is the dress code?",
      answer: "We've requested Black Tie Optional attire. For men, this means a dark suit or tuxedo. For women, cocktail dresses or evening gowns are perfect. We want everyone to feel elegant and comfortable."
    },
    {
      question: "Will the ceremony and reception be indoors or outdoors?",
      answer: "The ceremony will be held indoors at our venue. The reception will also be indoors, with a beautiful view. Both venues are climate-controlled for your comfort."
    },
    {
      question: "Can I bring a plus one?",
      answer: "We've allocated specific seating arrangements for our wedding. Please check your invitation or RSVP for details about additional guests. If you have questions, please reach out to us directly."
    },
    {
      question: "What will the weather be like?",
      answer: "While we hope for beautiful weather, the event will proceed rain or shine as both ceremony and reception are indoors. We recommend checking the forecast and dressing accordingly for traveling to and from the venue."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, there is complimentary parking available at both the ceremony and reception venues. Valet parking will also be available at the reception location."
    },
    {
      question: "Will there be an open bar?",
      answer: "Yes! We'll have an open bar during the cocktail hour and reception. We'll have a variety of beer, wine, and signature cocktails for you to enjoy."
    },
    {
      question: "Are children welcome?",
      answer: "While we love your little ones, we've decided to have an adults-only celebration. This allows everyone to relax and enjoy the evening. We appreciate your understanding."
    },
    {
      question: "Do you have a registry?",
      answer: "Your presence at our wedding is the greatest gift! However, if you'd like to give a gift, we've registered at a few places. You can find our registry information on our website or by visiting the Registry section."
    },
    {
      question: "Can I take photos during the ceremony?",
      answer: "We're having an unplugged ceremony, which means we kindly ask that you put away phones and cameras during the ceremony. Our professional photographer will capture all the special moments, and we're happy to share those photos with you afterward. Feel free to take photos during the reception!"
    },
    {
      question: "What if I have dietary restrictions?",
      answer: "Please let us know about any dietary restrictions or allergies when you RSVP. We'll work with our caterer to accommodate your needs. If you've already RSVP'd and need to update your dietary information, please contact us directly."
    },
    {
      question: "Will there be transportation between venues?",
      answer: "Yes, we'll have a complimentary shuttle service running between the ceremony and reception venues. The shuttle will be available before the ceremony and after the reception ends."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 px-8 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--foreground)] mb-4">
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
              className="border border-[var(--foreground)] rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-[var(--foreground)]/5 transition-colors duration-300"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="font-libre-baskerville text-lg md:text-xl font-semibold text-[var(--foreground)] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-[var(--foreground)] transition-transform duration-300 ${
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
                <div className="px-6 py-4 md:px-8 md:py-6 bg-[var(--foreground)]/5 border-t border-[var(--foreground)]/20">
                  <p className="font-libre-baskerville text-base md:text-lg leading-relaxed text-[var(--foreground)]/90">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="border border-[var(--foreground)] rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-dancing-script text-3xl text-[var(--foreground)] mb-4">
              Still Have Questions?
            </h3>
            <p className="font-libre-baskerville text-lg leading-relaxed mb-4">
              We'd love to hear from you! If you have any other questions or concerns, please don't hesitate to reach out to us.
            </p>
            <div className="space-y-2 font-libre-baskerville">
              <p className="text-[var(--foreground)]">
                <span className="font-semibold">Email:</span> justin.julia@email.com
              </p>
              <p className="text-[var(--foreground)]">
                <span className="font-semibold">Phone:</span> (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
