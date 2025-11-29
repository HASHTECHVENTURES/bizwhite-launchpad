import { Link } from "react-router-dom";

interface BreadcrumbProps {
  pageName: string;
  backgroundImage?: string;
}

const Breadcrumb = ({ pageName, backgroundImage }: BreadcrumbProps) => {
  const defaultBg = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920";
  
  return (
    <section
      className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-cover bg-center animate-fade-in"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${backgroundImage || defaultBg}')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm mb-3 sm:mb-4 animate-fade-in">
          <Link to="/" className="hover:text-white transition-all duration-300 hover:scale-105">
            Home
          </Link>
          <span>&gt;</span>
          <span className="text-white">{pageName}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-3 sm:mb-4 animate-fade-in leading-tight" style={{ animationDelay: "0.1s" }}>{pageName}</h1>
        <div className="h-1 w-16 sm:w-20 md:w-24 bg-[#ff6b35] animate-fade-in" style={{ animationDelay: "0.2s" }}></div>
      </div>
    </section>
  );
};

export default Breadcrumb;
