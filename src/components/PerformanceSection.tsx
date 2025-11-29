import miningBackground from "@/assets/mining-background.jpg";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useCounter } from "@/hooks/use-counter";

const PerformanceSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  
  const deliveriesCount = useCounter(321, 2000, isIntersecting);
  const clientsCount = useCounter(27, 2000, isIntersecting);
  
  const stats = [
    { value: deliveriesCount, label: "Successful Deliveries", isNumber: true },
    { value: clientsCount, label: "Clients", isNumber: true },
    { value: "100%", label: "Satisfied Customers", isNumber: false },
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
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4">
            Doing the right thing, at the right time.
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-[#ff6b35] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center group cursor-pointer transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200 + 200}ms` }}
            >
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-3 sm:mb-4 transition-all duration-500 group-hover:scale-110 group-hover:text-[#ff6b35]">
                {stat.isNumber ? stat.value : stat.value}
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
