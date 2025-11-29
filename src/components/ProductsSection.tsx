import ProductCard from "./ProductCard";
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
    <section id="products" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#ff6b35] text-white px-4 py-1 text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tailored Mining Services for Every Venture
          </h2>
          <div className="h-1 w-24 bg-[#ff6b35] mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Premium industrial minerals serving diverse global industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
              href={product.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
