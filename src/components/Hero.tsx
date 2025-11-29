import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import miningBackground from "@/assets/mining-background.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: miningBackground,
      label: "BIZWHITE",
      title: "Leading Manufacturers & Exporters of Industrial Minerals",
      description: "Serving industries such as pharmaceuticals, cosmetics, agriculture, edible oils and oil & water drilling with premium quality minerals.",
      buttonText: "Explore More"
    }
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] lg:min-h-screen flex items-center justify-start pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/90 via-[#1a1a1a]/85 to-[#1a1a1a]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 md:py-24">
        <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl text-left">
            <div className="inline-block bg-[#ff6b35] text-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 animate-fade-in">
              {slides[currentSlide].label}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl animate-fade-in">
              {slides[currentSlide].description}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#1a1a1a] hover:bg-white/90 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg font-semibold animate-fade-in hover-scale"
              asChild
            >
              <a href="#products">
                {slides[currentSlide].buttonText}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
