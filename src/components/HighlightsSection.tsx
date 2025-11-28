import { Award, Globe2, Shield, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import factoryImage from "@/assets/hero-factory.jpg";
import quartzImage from "@/assets/quartz.jpg";
import kaolinImage from "@/assets/kaolin.jpg";

const HighlightsSection = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const highlights = [
    {
      icon: Award,
      title: "Certifications",
      items: ["ISO 9001 : 2015", "DUNS", "FIEO"],
      description: null,
      image: factoryImage,
      bgColor: "from-blue-600/95 to-blue-800/95"
    },
    {
      icon: Globe2,
      title: "Global Manufacturers & Consumer Insights",
      items: null,
      description: "To provide solution to its customers by supplying exactly the right product for the end customer.",
      image: quartzImage,
      bgColor: "from-primary/95 to-primary/80"
    },
    {
      icon: Shield,
      title: "Quality Products",
      items: null,
      description: "Quality is not a matter of chance or choice, but a must and key stone for its international credibility.",
      image: kaolinImage,
      bgColor: "from-teal-600/95 to-teal-800/95"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden min-h-[350px] md:min-h-[420px] flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${highlight.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgColor} backdrop-blur-[2px]`}></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Icon & Title */}
                  <div className="mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {highlight.title}
                    </h3>
                  </div>
                  
                  {/* Items or Description */}
                  <div className="flex-grow mb-6">
                    {highlight.items ? (
                      <ul className="space-y-3">
                        {highlight.items.map((item, idx) => (
                          <li key={idx} className="flex items-center text-white text-lg font-medium">
                            <div className="w-2 h-2 rounded-full bg-white mr-3"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-white/95 text-lg leading-relaxed">
                        {highlight.description}
                      </p>
                    )}
                  </div>

                  {/* Read More Link */}
                  <Link 
                    to="/about" 
                    onClick={handleClick}
                    className="inline-flex items-center text-white font-bold text-lg hover:gap-3 gap-2 transition-all duration-300 group/link"
                  >
                    <span className="border-b-2 border-white/50 group-hover/link:border-white">read more</span>
                    <ChevronRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
