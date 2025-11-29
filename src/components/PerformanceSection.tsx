import miningBackground from "@/assets/mining-background.jpg";

const PerformanceSection = () => {
  const stats = [
    { value: "321", label: "Successful Deliveries" },
    { value: "27", label: "Clients" },
    { value: "100%", label: "Satisfied Customers" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${miningBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 animate-fade-in">
            Doing the right thing, at the right time.
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-[#ff6b35] mx-auto animate-fade-in"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in group cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-3 sm:mb-4 transition-all duration-500 group-hover:scale-110 group-hover:text-[#ff6b35]">
                {stat.value}
              </div>
              <div className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium transition-all duration-300 group-hover:text-white">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
