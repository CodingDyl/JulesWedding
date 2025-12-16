import Image from "next/image";
import just_7 from "../assets/just_7.jpeg";

const Registry = () => {
  return (
    <section id="registry" className="py-16 md:py-20 px-4 md:px-8 bg-transparent relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header with Image */}
        <div className="mb-16 relative">
          {/* Decorative image */}
          <div className="flex justify-center mb-6">
            <div className="bg-white p-2 rounded shadow-lg rotate-[2deg] hover:rotate-0 transition-transform duration-300">
              <Image
                src={just_7}
                alt="Justin and Julia"
                width={280}
                height={350}
                className="object-cover rounded w-[280px] h-[350px] md:w-[180px] md:h-[225px]"
              />
            </div>
          </div>
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--text-accent)] mb-4">
            Registry
          </h2>
          <div className="w-24 h-px bg-[var(--foreground)] mx-auto"></div>
        </div>

        {/* Registry Message */}
        <div className="mb-12">
          <p className="font-libre-baskerville text-xl leading-relaxed mb-6">
            Your presence at our wedding is the greatest gift we could ask for. 
            However, if you would like to give a gift, we would be grateful for a monetary contribution to help us start our new life together.
          </p>
        </div>

        {/* Bank Details */}
          <div className="border border-[var(--text-main)] rounded-lg p-8 md:p-12 max-w-2xl mx-auto mb-8 bg-[var(--bg-secondary)]/20">
          <h3 className="font-dancing-script text-3xl text-[var(--text-accent)] mb-6 text-center">
            Bank Details
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 border-b border-[var(--text-main)]/20">
              <span className="font-libre-baskerville font-semibold text-lg mb-2 md:mb-0">Bank Name:</span>
              <span className="font-libre-baskerville text-lg">Discovery Bank</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 border-b border-[var(--text-main)]/20">
              <span className="font-libre-baskerville font-semibold text-lg mb-2 md:mb-0">Account Holder:</span>
              <span className="font-libre-baskerville text-lg">Justin Blume</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 border-b border-[var(--text-main)]/20">
              <span className="font-libre-baskerville font-semibold text-lg mb-2 md:mb-0">Account Number:</span>
              <span className="font-libre-baskerville text-lg font-mono">10655542843</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 border-b border-[var(--text-main)]/20">
              <span className="font-libre-baskerville font-semibold text-lg mb-2 md:mb-0">Branch Code:</span>
              <span className="font-libre-baskerville text-lg font-mono">679000</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3">
              <span className="font-libre-baskerville font-semibold text-lg mb-2 md:mb-0">Reference:</span>
              <span className="font-libre-baskerville text-lg italic">Your Name</span>
            </div>
          </div>
        </div>

        {/* Additional Note */}
        <div className="border border-[var(--text-main)] rounded-lg p-6 max-w-2xl mx-auto bg-[var(--bg-secondary)]/10">
          <p className="font-libre-baskerville text-base leading-relaxed text-center text-gray-600">
            Please use your name as the reference when making a transfer so we can thank you personally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registry; 