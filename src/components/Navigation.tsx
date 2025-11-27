import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/bizwhite-logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    "Silica Sand",
    "Kaolin – Ultra White Kaolin",
    "Bleaching Earth (Oil Boost™)",
    "Quartz Crystalline Mineral",
    "Clay Catalysts",
    "Feldspar",
    "Agriculture Minerals",
    "Oil Well Drilling Grade Bentonite",
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="BizWhite" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary font-medium">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {products.map((product) => (
                        <li key={product}>
                          <NavigationMenuLink asChild>
                            <a
                              href="#products"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{product}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="#certifications" className="text-foreground hover:text-primary transition-colors font-medium">
              Certifications
            </a>
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Contact Us</a>
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
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </a>
              <div>
                <button className="flex items-center text-foreground hover:text-primary transition-colors font-medium w-full">
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="ml-4 mt-2 space-y-2">
                  {products.map((product) => (
                    <a
                      key={product}
                      href="#products"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {product}
                    </a>
                  ))}
                </div>
              </div>
              <a href="#certifications" className="text-foreground hover:text-primary transition-colors font-medium">
                Certifications
              </a>
              <Button asChild variant="default" className="bg-primary hover:bg-primary/90 w-full">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
