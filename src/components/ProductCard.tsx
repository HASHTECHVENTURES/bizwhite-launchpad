import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const ProductCard = ({ title, description, image, href }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(href);
  };

  return (
    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 border-gray-700 hover:border-[#ff6b35] bg-white animate-fade-in hover:-translate-y-2">
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a1a1a] mb-2 sm:mb-3 group-hover:text-[#ff6b35] transition-all duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </CardContent>
      <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6">
        <Button variant="ghost" className="group/btn text-[#ff6b35] hover:text-[#ff6b35] hover:bg-[#ff6b35]/10 p-0 text-sm sm:text-base transition-all duration-300" onClick={handleClick}>
          Read More
          <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
