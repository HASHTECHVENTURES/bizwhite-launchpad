import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/bizwhite-logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const products = [
    { name: "Silica Sand", href: "/silica-sand" },
    { name: "Kaolin", href: "/kaolin" },
    { name: "Quartz", href: "/quartz" },
    { name: "Bleaching Earth", href: "/bleaching-earth" },
    { name: "Clay Catalysts", href: "/clay-catalysts" },
    { name: "Feldspar", href: "/feldspar" },
    { name: "Bentonite", href: "/bentonite" },
    { name: "Oil & Water Drilling", href: "/oil-water-drilling" },
    { name: "Agriculture", href: "/agriculture" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="BizWhite" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-foreground hover:text-primary transition-colors font-medium"
                onMouseEnter={() => setProductsOpen(true)}
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-[500px] bg-white rounded-lg shadow-xl border border-gray-200 p-4 grid grid-cols-2 gap-2 ${productsOpen ? 'block' : 'hidden'} group-hover:block`}
                onMouseLeave={() => setProductsOpen(false)}
              >
                {products.map((product) => (
                  <Link
                    key={product.name}
                    to={product.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <div>
                <button 
                  className="flex items-center text-foreground hover:text-primary transition-colors font-medium w-full"
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
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Button asChild variant="default" className="bg-primary hover:bg-primary/90 w-full">
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
