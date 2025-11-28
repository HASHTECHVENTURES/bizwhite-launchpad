import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-factory.jpg";
import miningBackground from "@/assets/mining-background.jpg";
import factoryImage from "@/assets/hero-factory.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: heroImage,
      label: "BIZWHITE",
      title: "Professional Team Delivering High-Quality Mining Services",
      description: "Delivering consistent quality in Bentonite, Bleaching Earth, Kaolin, Quartz Silica Sand, Clay Catalyst, Feldspar and Sodium Feldspar to global industries.",
      buttonText: "Explore More"
    },
    {
      image: miningBackground,
      label: "BIZWHITE",
      title: "Leading Manufacturers & Exporters of Industrial Minerals",
      description: "Serving industries such as pharmaceuticals, cosmetics, agriculture, edible oils and oil & water drilling with premium quality minerals.",
      buttonText: "Explore More"
    },
    {
      image: factoryImage,
      label: "BIZWHITE",
      title: "ISO 9001:2015 Certified Quality Minerals",
      description: "We are one of India's recognized manufacturers, processors and exporters of Bentonite and a wide range of industrial minerals.",
      buttonText: "Explore More"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left animate-fade-in">
            <div className="inline-block bg-[#ff6b35] text-white px-4 py-1 text-sm font-semibold mb-4">
              {slides[currentSlide].label}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {slides[currentSlide].description}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#1a1a1a] hover:bg-white/90 text-lg px-8 py-6 shadow-lg font-semibold"
              asChild
            >
              <a href="#products">
                {slides[currentSlide].buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Right Side - Slider Controls */}
          <div className="hidden lg:flex flex-col items-end gap-4">
            {/* Slide Thumbnails */}
            <div className="flex flex-col gap-3">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative w-20 h-20 rounded-full overflow-hidden border-2 transition-all ${
                    currentSlide === index 
                      ? 'border-[#ff6b35] scale-110' 
                      : 'border-white/30 hover:border-white/50'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-8 left-4 z-10 flex items-center gap-4">
          <div className="bg-[#1a1a1a]/80 backdrop-blur-sm px-4 py-2 rounded text-white text-sm">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
