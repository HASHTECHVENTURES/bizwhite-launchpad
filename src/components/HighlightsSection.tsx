import { Settings, RefreshCw, CheckCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HighlightsSection = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Certifications */}
          <div
            className="relative rounded-xl overflow-hidden min-h-[400px] flex flex-col"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#1e3a5f]/90"></div>
            <div className="relative z-10 p-8 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <Settings className="w-8 h-8 text-[#1e3a5f]" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Certifications
                </h3>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="text-white text-lg">ISO 9001 : 2015</li>
                <li className="text-white text-lg">DUNS</li>
                <li className="text-white text-lg">FIEO</li>
              </ul>

              <Link 
                to="/about" 
                onClick={handleClick}
                className="inline-flex items-center text-primary font-bold text-lg hover:underline"
              >
                read more <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Global Manufacturers */}
          <div
            className="relative rounded-xl overflow-hidden min-h-[400px] flex flex-col"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#1e3a5f]/90"></div>
            <div className="relative z-10 p-8 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <RefreshCw className="w-8 h-8 text-[#1e3a5f]" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Global Manufacturers & Consumer Insights
                </h3>
              </div>
              
              <p className="text-white/90 text-lg italic mb-8 flex-grow">
                To provider solution to its customers by supplying exactly the right product for the end customer.
              </p>

              <Link 
                to="/about" 
                onClick={handleClick}
                className="inline-flex items-center text-primary font-bold text-lg hover:underline"
              >
                read more <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Quality Products */}
          <div
            className="relative rounded-xl overflow-hidden min-h-[400px] flex flex-col"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#1e3a5f]/90"></div>
            <div className="relative z-10 p-8 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-[#1e3a5f]" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Quality Products
                </h3>
              </div>
              
              <p className="text-white/90 text-lg italic mb-8 flex-grow">
                Quality is not a matter of chance or choice, but a must and key stone for its international credibility.
              </p>

              <Link 
                to="/about" 
                onClick={handleClick}
                className="inline-flex items-center text-primary font-bold text-lg hover:underline"
              >
                read more <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
