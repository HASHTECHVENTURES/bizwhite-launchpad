import ProductCard from "./ProductCard";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import silicaImage from "@/assets/silica-sand-solar.jpg";
import kaolinImage from "@/assets/kaolin-paper.jpg";
import oilBoostImage from "@/assets/oil-boost.jpg";
import quartzImage from "@/assets/quartz-samples.jpg";
import catalystImage from "@/assets/clay-catalyst-tower.jpg";
import feldsparImage from "@/assets/feldspar-minerals.jpg";
import agricultureImage from "@/assets/agriculture-spray.jpg";
import drillingImage from "@/assets/drilling-platform.jpg";
import bentoniteImage from "@/assets/bentonite-overview.jpg";

const ProductsSection = () => {
  const { ref: headerRef, isIntersecting: headerInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: gridRef, isIntersecting: gridInView } = useIntersectionObserver({ threshold: 0.1 });
  const products = [
    {
      title: "Silica Sand for Solar Panels",
      description: "BizWhite Silica–SG11 low iron silica sand undergoes washing, spiral magnetic separation, scrubbing and leaching to remove impurities.",
      image: silicaImage,
      href: "/silica-sand",
    },
    {
      title: "Ultra White Kaolin",
      description: "Premium brightness Kaolin suitable for Paper & Pulp, Paints, Inks & Coatings, and Refractories.",
      image: kaolinImage,
      href: "/kaolin",
    },
    {
      title: "Oil Boost™ Bleaching Earth",
      description: "Bleaching earth suitable for moderate to hard-to-bleach oils like soybean, sunflower, rapeseed, caster, palm and coconut oil.",
      image: oilBoostImage,
      href: "/bleaching-earth",
    },
    {
      title: "Quartz Crystalline Mineral",
      description: "Suitable for engineered stone, ceramics, refractories, semiconductor and glass industries.",
      image: quartzImage,
      href: "/quartz",
    },
    {
      title: "Clay Catalysts",
      description: "Acidic catalysts used in reactions involving olefins and aromatics.",
      image: catalystImage,
      href: "/clay-catalysts",
    },
    {
      title: "Feldspar",
      description: "Used in the cement and glass industries for strength and durability.",
      image: feldsparImage,
      href: "/feldspar",
    },
    {
      title: "Agriculture Minerals",
      description: "Minerals for home gardens and agriculture farming.",
      image: agricultureImage,
      href: "/agriculture",
    },
    {
      title: "Bentonite",
      description: "Versatile clay mineral used in oil & water drilling, agriculture, construction, and various industrial applications.",
      image: bentoniteImage,
      href: "/bentonite",
    },
    {
      title: "Oil Well Drilling Grade Bentonite",
      description: "Used to seal boreholes, remove drill cuttings and lubricate drilling heads.",
      image: drillingImage,
      href: "/oil-water-drilling",
    },
  ];

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <div className={`inline-block bg-[#ff6b35] text-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 transition-all duration-700 ${headerInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            Our Services
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 transition-all duration-1000 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
            Tailored Mining Services for Every Venture
          </h2>
          <div className={`h-1 w-20 sm:w-24 bg-[#ff6b35] mx-auto mb-4 sm:mb-6 transition-all duration-700 ${headerInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '200ms' }}></div>
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl lg:max-w-3xl mx-auto transition-all duration-1000 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            Premium industrial minerals serving diverse global industries
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCard
                title={product.title}
                description={product.description}
                image={product.image}
                href={product.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
