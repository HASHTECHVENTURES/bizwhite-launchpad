import { Award, Globe2, ShieldCheck, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HighlightsSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "Certifications",
      items: ["ISO 9001 : 2015", "DUNS", "FIEO"],
    },
    {
      icon: Globe2,
      title: "Global Manufacturers & Consumer Insights",
      description: "To provider solution to its customers by supplying exactly the right product for the end customer.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Products",
      description: "Quality is not a matter of chance or choice, but a must and key stone for its international credibility.",
    },
  ];

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden bg-[#1a2744] p-8 min-h-[350px] flex flex-col"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-[#1a2744]/90"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    <highlight.icon className="w-7 h-7 text-[#1a2744]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {highlight.title}
                  </h3>
                </div>
                
                {highlight.items ? (
                  <ul className="space-y-2 mb-6 flex-grow">
                    {highlight.items.map((item, i) => (
                      <li key={i} className="text-white/90 text-lg">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/90 text-lg italic mb-6 flex-grow">
                    {highlight.description}
                  </p>
                )}

                <Link 
                  to="/about" 
                  onClick={handleClick}
                  className="inline-flex items-center text-primary font-bold hover:underline"
                >
                  read more <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
