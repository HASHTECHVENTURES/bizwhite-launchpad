import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const productLinks = [
    { name: "Silica Sand", href: "/silica-sand" },
    { name: "Kaolin", href: "/kaolin" },
    { name: "Bleaching Earth", href: "/bleaching-earth" },
    { name: "Quartz", href: "/quartz" },
    { name: "Clay Catalysts", href: "/clay-catalysts" },
    { name: "Feldspar", href: "/feldspar" },
    { name: "Agriculture", href: "/agriculture" },
    { name: "Bentonite", href: "/bentonite" },
    { name: "Oil & Water Drilling", href: "/oil-water-drilling" },
  ];

  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">BizWhite</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              BizWhite is a distinguished manufacturer, exporter & supplier of minerals serving industries like Oil & Gas, Steel, Cement, Fertilizer, Ceramics, Pharmaceuticals, Paints, Cosmetics, Edible Oil and more.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-[#ff6b35] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-[#ff6b35] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-[#ff6b35] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.href}
                    className="text-white/80 hover:text-[#ff6b35] transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-[#ff6b35] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-[#ff6b35] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#products" className="text-white/80 hover:text-[#ff6b35] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="#certifications" className="text-white/80 hover:text-[#ff6b35] transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-[#ff6b35] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Monarch Creations Group (Brand-BizWhite Mines). All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/70 hover:text-[#ff6b35] text-sm transition-colors">
                Terms & Condition
              </a>
              <a href="#" className="text-white/70 hover:text-[#ff6b35] text-sm transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
