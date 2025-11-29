import { Link } from "react-router-dom";

interface BreadcrumbProps {
  pageName: string;
  backgroundImage?: string;
}

const Breadcrumb = ({ pageName, backgroundImage }: BreadcrumbProps) => {
  const defaultBg = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920";
  
  return (
    <section
      className="relative pt-32 pb-20 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${backgroundImage || defaultBg}')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-white/90 text-sm mb-4">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <span className="text-white">{pageName}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{pageName}</h1>
        <div className="h-1 w-20 bg-[#ff6b35]"></div>
      </div>
    </section>
  );
};

export default Breadcrumb;
