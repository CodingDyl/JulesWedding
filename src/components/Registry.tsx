const Registry = () => {
  return (
    <section id="registry" className="py-20 px-8 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-dancing-script text-5xl md:text-7xl text-[var(--foreground)] mb-4">
            Registry
          </h2>
          <div className="w-24 h-px bg-[var(--foreground)] mx-auto"></div>
        </div>

        {/* Registry Message */}
        <div className="mb-12">
          <p className="font-libre-baskerville text-xl leading-relaxed mb-6">
            Your presence at our wedding is the greatest gift we could ask for. 
            However, if you would like to give a gift, we have registered at the following locations:
          </p>
        </div>

        {/* Registry Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Registry Option 1 */}
          <div className="border border-[var(--foreground)] rounded-lg p-8 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-300">
            <h3 className="font-dancing-script text-3xl mb-4">Le Creuset</h3>
            <p className="font-libre-baskerville text-lg mb-4">
              Home goods and kitchen essentials
            </p>
            <a 
              href="#" 
              className="font-libre-baskerville text-sm underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Registry →
            </a>
          </div>

          {/* Registry Option 2 */}
          <div className="border border-[var(--foreground)] rounded-lg p-8 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-300">
            <h3 className="font-dancing-script text-3xl mb-4">Honeymoon Fund</h3>
            <p className="font-libre-baskerville text-lg mb-4">
              Instead of pots and pans, help us create memories that will last a lifetime.
            </p>
            <a 
              href="#" 
              className="font-libre-baskerville text-sm underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Registry →
            </a>
          </div>
        </div>

        {/* Alternative Gift Options */}
        <div className="border border-[var(--foreground)] rounded-lg p-8">
          <h3 className="font-dancing-script text-3xl text-[var(--foreground)] mb-4">
            Alternative Gifts
          </h3>
          <p className="font-libre-baskerville text-lg leading-relaxed">
            We would also be grateful for contributions toward our honeymoon fund or donations to our favorite charities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registry; 