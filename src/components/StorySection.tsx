import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const StorySection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-4xl lg:max-w-5xl mx-auto">
          <div className={`inline-block bg-[#ff6b35] text-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 transition-all duration-700 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            About Us
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a1a] mb-6 sm:mb-8 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
            BizWhite at a Glance
          </h2>
          <div className={`h-1 w-20 sm:w-24 bg-[#ff6b35] mx-auto mb-6 sm:mb-8 transition-all duration-700 ${isIntersecting ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '200ms' }}></div>
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            BizWhite, under Monarch Creations, is one of India's recognized manufacturers, processors and exporters of Bentonite and a wide range of industrial minerals including Bleaching Earth, Kaolin–China Clay, Quartz Silica Sand, Clay Catalyst and Feldspar. We serve industries such as pharmaceuticals, cosmetics, agriculture, edible oils and oil & water drilling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
