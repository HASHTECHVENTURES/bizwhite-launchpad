import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import HighlightsSection from "@/components/HighlightsSection";
import ProductsSection from "@/components/ProductsSection";
import PerformanceSection from "@/components/PerformanceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <StorySection />
      <HighlightsSection />
      <ProductsSection />
      <PerformanceSection />
      <Footer />
    </div>
  );
};

export default Index;
