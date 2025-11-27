import { Award, Globe2, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HighlightsSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "Certifications",
      description: "ISO 9001:2015 certified with international quality standards",
    },
    {
      icon: Globe2,
      title: "Global Manufacturing & Consumer Insights",
      description: "Serving diverse industries across multiple continents",
    },
    {
      icon: ShieldCheck,
      title: "Quality Products",
      description: "Rigorous testing and quality control for every batch",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="pt-8 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mb-6">
                  <highlight.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
