import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import oilBoostImage from "@/assets/oil-boost.jpg";

const BleachingEarth = () => {
  const bw108Specs = [
    { parameter: "Bulk Density (gm/ml)", value: "0.5 - 0.7" },
    { parameter: "Moisture (at 110°C)", value: "10 max" },
    { parameter: "Bleaching Efficiency % against our S.O reference material", value: "90 & Min" },
    { parameter: "Filtration Timing (Using 40 Micron paper)", value: "4 to 6 min" },
    { parameter: "pH (10% suspension)", value: "3.5 max" },
    { parameter: "Residual Acidity(mgKOH/gm)", value: "1 max" },
    { parameter: "Acidity", value: "0.35 max" },
    { parameter: "Average particle size(microns)", value: "20 to 30" },
    { parameter: "BET Surface Area (m²/gm)", value: "300 to 325" },
  ];

  const bw207Specs = [
    { parameter: "Bulk Density (gm/ml)", value: "0.3 - 0.6" },
    { parameter: "Moisture (at 110°C)", value: "10 max" },
    { parameter: "Bleaching Efficiency % against our S.O reference material", value: "95 & Min" },
    { parameter: "Filtration Timing (Using 40 Micron paper)", value: "5 to 8 Min" },
    { parameter: "pH(10% suspension)", value: "4.0 max" },
    { parameter: "Residual Acidity(mgKOH/gm)", value: "2 max" },
    { parameter: "Acidity", value: "0.2 max" },
    { parameter: "Average particle size(microns)", value: "20 to 30" },
    { parameter: "BET Surface Area (m²/gm)", value: "300 to 325" },
  ];

  const attapulgiteSpecs = [
    { parameter: "Form", value: "Granules" },
    { parameter: "Color", value: "Off White" },
    { parameter: "Volatile", value: "3%" },
    { parameter: "PDI", value: "12±5" },
    { parameter: "pH", value: "8 - 10" },
    { parameter: "Oil Abs", value: "115%" },
    { parameter: "Water Abs", value: "140%" },
    { parameter: "Bulk Density", value: "650lbs" },
    { parameter: "Specific Gravity", value: "2.38" },
    { parameter: "Viscosity (600rpm 45% solid acre)", value: "1 Bag" },
    { parameter: "Granulometry Over Size", value: "1.4%" },
    { parameter: "Granulometry Under Size", value: "2.4%" },
    { parameter: "Shell size / sieve size", value: "< 2%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Bleaching Earth</h1>
          <div className="h-1 w-16 bg-primary mt-4"></div>
        </div>
      </section>

      {/* BizWhite Oil Boost Intro */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                BizWhite Oil Boost™ Bleaching Earth
              </h2>
              <p className="italic">
                Premium bleaching earth for moderate to hard-to-bleach oils.
              </p>
              <p>
                For extra light soybean, sunflower, rapeseed, castor, palm, coconut
                oil edible oil.
              </p>
              <h3 className="text-xl font-bold mt-8">Our Work - Bleaching Earth</h3>
              <p>
                At BizWhite by Monarch Creations, we have a unique conviction of
                extensive research and process expertise, allowing us to manufacture
                highly efficient bleaching earth.
              </p>
            </div>
            <div>
              <img
                src={oilBoostImage}
                alt="Bleaching Earth"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800"
                alt="Edible Oils"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Product - For Edible Oils</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold">BizWhite Oil Boost™ – BW-108</span> product offer edible oil refiners processing
                aids to produce clean, clear, quality oil. It features a large, highly active
                surface area well suited for the removal of color bodies and impurities from
                edible oils.
              </p>
              <h4 className="text-xl font-bold text-gray-900">Bleaching</h4>
              <p className="text-gray-700 leading-relaxed text-justify">
                Good Bleaching in the refining process is essential to produce high-quality
                edible oil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality and Performance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Quality</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                We are highly encouraged to achieve the highest quality standards of
                bleaching earth.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-8">Proven Performance</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                Efficient removal of chlorophyll, carotene and other color bodies.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Fast filtration with long filtration cycles and less pressure build-up
                at cycle end.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Reduce free fatty acid rise and the associated risk of damaged oil.
              </p>
              <p className="text-gray-700 font-bold mt-4">
                PACKING: 25 Kg Bag, Jumbo Bag
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800"
                alt="Quality Oils"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grade Physical Properties */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Grade Physical Properties</h2>
          
          {/* BW-108 */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src={oilBoostImage}
                  alt="BW-108"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  BizWhite Oil Boost™ – BW-108 (Light)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-900">
                        <th className="border border-gray-600 px-4 py-2 text-left">Parameter</th>
                        <th className="border border-gray-600 px-4 py-2 text-left">Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bw108Specs.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-primary" : "bg-primary/80"}>
                          <td className="border border-gray-600 px-4 py-2">{row.parameter}</td>
                          <td className="border border-gray-600 px-4 py-2">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* BW-207 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">
              BizWhite Oil Boost™ – BW-207 Bleaching Earth
            </h3>
            <div className="overflow-x-auto max-w-2xl">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="border border-gray-600 px-4 py-2 text-left">Parameter</th>
                    <th className="border border-gray-600 px-4 py-2 text-left">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {bw207Specs.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-primary" : "bg-primary/80"}>
                      <td className="border border-gray-600 px-4 py-2">{row.parameter}</td>
                      <td className="border border-gray-600 px-4 py-2">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Attapulgite Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            BizWhite Attapulgite Bleaching Earth AG-45
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-gray-700">
                <span className="font-bold">Mineral :</span> ATTAPULGITE
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Volatile :</span> ±4%M
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Density :</span> 0.45 gm/cc min
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Free Moisture :</span> 3 % max
              </p>
              <p className="text-gray-700">
                Sieve analysis as per requirement.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8">Specifications</h3>
              <p className="text-gray-700">Attapulgite Granules +12 to 60 Mesh</p>
              
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attapulgiteSpecs.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-gray-300 px-4 py-2">{row.parameter}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <img
                src={oilBoostImage}
                alt="Attapulgite"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-6 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-lg text-center md:text-left">
            Looking for a Best Quality Quartz- Silica Sand & Kaolin- China Clay
          </p>
          <a
            href="/contact"
            className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            INQUIRE NOW &gt;
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BleachingEarth;


