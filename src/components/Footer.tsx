import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/bizwhite-logo.png";

const Footer = () => {
  const productLinks = [
    "Silica Sand",
    "Clay Catalysts",
    "Feldspar",
    "Kaolin – China Clay",
    "Quartz",
    "Bleaching Earth",
    "Agriculture",
    "Oil Well Drilling",
  ];

  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <img src={logo} alt="BizWhite" className="h-12 mb-6 brightness-0 invert" />
            <p className="text-white/90 leading-relaxed mb-6">
              BizWhite is a distinguished manufacturer, exporter & supplier of minerals serving industries like Oil & Gas, Steel, Cement, Fertilizer, Ceramics, Pharmaceuticals, Paints, Cosmetics, Edible Oil and more.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-white/90">info@bizwhite.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white/90">+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-white/90">Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((product, index) => (
                <li key={index}>
                  <a
                    href="#products"
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/80 hover:text-accent transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-white/80 hover:text-accent transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} BizWhite. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/70 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-accent text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
