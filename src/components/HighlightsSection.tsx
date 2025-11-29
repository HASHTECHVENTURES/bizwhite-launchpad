import { Settings, RefreshCw, CheckCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import certificationsBg from "@/assets/certifications-bg.png";
import globalInsightsBg from "@/assets/global-insights-bg.png";
import qualityBg from "@/assets/quality-bg.png";

const HighlightsSection = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Certifications */}
          <div
            className="relative rounded-xl overflow-hidden min-h-[300px] md:min-h-[400px] flex flex-col"
            style={{
              backgroundImage: `url(${certificationsBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#1a1a1a]/90"></div>
            <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#ff6b35] flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Certifications
                </h3>
              </div>
              
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
                <li className="text-white text-base md:text-lg">ISO 9001 : 2015</li>
                <li className="text-white text-base md:text-lg">DUNS</li>
                <li className="text-white text-base md:text-lg">FIEO</li>
              </ul>

              <Link 
                to="/about" 
                onClick={handleClick}
                className="inline-flex items-center text-[#ff6b35] font-bold text-base md:text-lg hover:underline"
              >
                read more <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Global Manufacturers */}
          <div
            className="relative rounded-xl overflow-hidden min-h-[300px] md:min-h-[400px] flex flex-col"
            style={{
              backgroundImage: `url(${globalInsightsBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#1a1a1a]/90"></div>
            <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#ff6b35] flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Global Manufacturers & Consumer Insights
                </h3>
              </div>
              
              <p className="text-white/90 text-base md:text-lg italic mb-6 md:mb-8 flex-grow">
                To provider solution to its customers by supplying exactly the right product for the end customer.
              </p>

              <Link 
                to="/about" 
                onClick={handleClick}
                className="inline-flex items-center text-[#ff6b35] font-bold text-base md:text-lg hover:underline"
              >
                read more <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Quality Products */}
          <div
            className="relative rounded-xl overflow-hidden min-h-[300px] md:min-h-[400px] flex flex-col sm:col-span-2 lg:col-span-1"
            style={{
              backgroundImage: `url(${qualityBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#1a1a1a]/90"></div>
            <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#ff6b35] flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Quality Products
                </h3>
              </div>
              
              <p className="text-white/90 text-base md:text-lg italic mb-6 md:mb-8 flex-grow">
                Quality is not a matter of chance or choice, but a must and key stone for its international credibility.
              </p>

              <Link 
                to="/about" 
                onClick={handleClick}
                className="inline-flex items-center text-[#ff6b35] font-bold text-base md:text-lg hover:underline"
              >
                read more <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
