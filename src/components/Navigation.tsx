import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/bizwhite-logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [bentoniteOpen, setBentoniteOpen] = useState(false);

  const products = [
    { name: "Silica Sand", href: "/silica-sand" },
    { name: "Kaolin", href: "/kaolin" },
    { name: "Quartz", href: "/quartz" },
    { name: "Bleaching Earth", href: "/bleaching-earth" },
    { name: "Clay Catalysts", href: "/clay-catalysts" },
    { name: "Feldspar", href: "/feldspar" },
  ];

  const bentoniteSubmenu = [
    { name: "Oil & Water Drilling", href: "/oil-water-drilling" },
    { name: "Agriculture", href: "/agriculture" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#1a1a1a] backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">BizWhite</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white/90 hover:text-[#ff6b35] transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white/90 hover:text-[#ff6b35] transition-colors font-medium">
              About Us
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => {
                setProductsOpen(false);
                setBentoniteOpen(false);
              }}
            >
              <button className="flex items-center text-white/90 hover:text-[#ff6b35] transition-colors font-medium py-2">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute top-full left-0 pt-2 ${productsOpen ? 'block' : 'hidden'}`}>
                <div className="w-[280px] bg-[#2a2a2a] rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="block px-4 py-2 text-sm text-white/90 hover:bg-[#ff6b35] hover:text-white transition-colors"
                      onClick={() => setProductsOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                  {/* Bentonite with submenu */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setBentoniteOpen(true)}
                    onMouseLeave={() => setBentoniteOpen(false)}
                  >
                    <div className="flex items-center justify-between px-4 py-2 text-sm text-white/90 hover:bg-[#ff6b35] hover:text-white transition-colors cursor-pointer">
                      <Link to="/bentonite" onClick={() => setProductsOpen(false)}>Bentonite</Link>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <div className={`absolute right-full top-0 pr-1 ${bentoniteOpen ? 'block' : 'hidden'}`}>
                      <div className="w-[200px] bg-[#2a2a2a] rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                        {bentoniteSubmenu.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-white/90 hover:bg-[#ff6b35] hover:text-white transition-colors"
                            onClick={() => setProductsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/contact" className="text-white/90 hover:text-[#ff6b35] transition-colors font-medium">
              Contact Us
            </Link>
            
            <Button asChild variant="default" className="bg-[#ff6b35] hover:bg-[#ff5722] text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
            
            <button className="text-white/90 hover:text-[#ff6b35] transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-white hover:bg-gray-800"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800 bg-[#1a1a1a]">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white/90 hover:text-[#ff6b35] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-white/90 hover:text-[#ff6b35] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <div>
                <button 
                  className="flex items-center text-white/90 hover:text-[#ff6b35] transition-colors font-medium w-full"
                  onClick={() => setProductsOpen(!productsOpen)}
                >
                  Products <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                {productsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        to={product.href}
                        className="block text-sm text-white/70 hover:text-[#ff6b35] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                    {/* Bentonite with submenu */}
                    <div>
                      <button 
                        className="flex items-center text-sm text-white/70 hover:text-[#ff6b35] transition-colors w-full"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setBentoniteOpen(!bentoniteOpen);
                        }}
                      >
                        Bentonite <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${bentoniteOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {bentoniteOpen && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link
                            to="/bentonite"
                            className="block text-sm text-white/70 hover:text-[#ff6b35] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Bentonite Overview
                          </Link>
                          {bentoniteSubmenu.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block text-sm text-white/70 hover:text-[#ff6b35] transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <Button asChild variant="default" className="bg-[#ff6b35] hover:bg-[#ff5722] text-white w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
