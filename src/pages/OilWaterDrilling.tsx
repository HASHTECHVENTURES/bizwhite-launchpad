import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import drillingImage from "@/assets/drilling.jpg";
import bentoniteImage from "@/assets/bentonite.jpg";
import bentoniteApiBw12 from "@/assets/bentonite-api-bw12.jpg";
import drillingPlatform from "@/assets/drilling-platform.jpg";
import waterDrilling from "@/assets/water-drilling.jpg";

const OilWaterDrilling = () => {
  const advantages = [
    "Due to its dispersed nature, it is very easy to mix. No flocs are formed",
    "It gives thin but sturdy wall to well formation",
    "Cuttings are separated easily from mud for reuse",
    "Fine cutting settles at bottom, so that pumps are protected from abrasive damages",
    "Protects drill bits by cooling",
  ];

  const apiBw9Specs = [
    { parameter: "Viscosity at 600RPM", unit: "cp", value: "30 min" },
    { parameter: "Yeild Point / Plastic Viscosity Ratio", unit: "-", value: "max 3" },
    { parameter: "Water Loss (ml)", unit: "ml", value: "max 15" },
    { parameter: "Grit (200#)", unit: "%", value: "max 4" },
  ];

  const apiBw11Specs = [
    { parameter: "Viscosity at 600RPM", unit: "cp", value: "30 min" },
    { parameter: "Yeild Point / Plastic Viscosity Ratio", unit: "-", value: "max 6" },
    { parameter: "Water Loss (ml)", unit: "ml", value: "max 16" },
    { parameter: "Grit (200#)", unit: "%", value: "max 2.5" },
  ];

  const bw12Benefits = [
    "Gives high barrel yield.",
    "3% to 5% of Mineral develops 15 centipoise viscosity.",
    "Little loss of drilling fluids.",
    "Withstands formation pressure.",
    "Matching weighting agents.",
  ];

  const bw71Benefits = [
    "Gives high barrel yield.",
    "3% to 5% of Mineral develops 15 centipoise viscosity.",
    "Little loss of drilling fluids.",
    "Withstands formation pressure.",
    "Matching weighting agents.",
    "Retains thixotopic properties when met with brine and high temperature in deep drilling",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${drillingImage})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/80 text-sm mb-2">Home &gt; Oil & Water Drilling</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Oil & Water Drilling</h1>
          <div className="h-1 w-16 bg-primary mt-4"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-justify">
                Another conventional use of bentonite is as a mud constituent for oil- and
                water- well drilling. Its role is mainly to seal the borehole walls, to remove
                drill cuttings and to lubricate the cutting head. The special higher mud yield
                results in using less quantity of Bentonite for the same standard mud. This
                results in lesser requirement of Bentonite.
              </p>
              <h3 className="text-2xl font-bold text-gray-900">ADVANTAGES</h3>
              <div className="h-1 w-16 bg-primary"></div>
              <ul className="space-y-2">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={drillingPlatform}
                alt="Oil Drilling"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* API Grade Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Oil & Water Drilling Bentonites - API Grade
          </h2>
          <div className="h-1 w-16 bg-white mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* API-BW9 */}
            <div>
              <h3 className="text-2xl font-bold mb-6">API-BW9</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="border border-gray-600 px-4 py-2 text-left">Parameters</th>
                      <th className="border border-gray-600 px-4 py-2 text-left">Units</th>
                      <th className="border border-gray-600 px-4 py-2 text-left">Results</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiBw9Specs.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-primary" : "bg-primary/80"}>
                        <td className="border border-gray-600 px-4 py-2">{row.parameter}</td>
                        <td className="border border-gray-600 px-4 py-2">{row.unit}</td>
                        <td className="border border-gray-600 px-4 py-2">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <p className="font-bold">Available Packings :</p>
                <p>50kg and Jumbo Packing.</p>
              </div>
            </div>

            {/* API-BW11 */}
            <div>
              <h3 className="text-2xl font-bold mb-6">API-BW11</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="border border-gray-600 px-4 py-2 text-left">Parameters</th>
                      <th className="border border-gray-600 px-4 py-2 text-left">Units</th>
                      <th className="border border-gray-600 px-4 py-2 text-left">Results</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiBw11Specs.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-primary" : "bg-primary/80"}>
                        <td className="border border-gray-600 px-4 py-2">{row.parameter}</td>
                        <td className="border border-gray-600 px-4 py-2">{row.unit}</td>
                        <td className="border border-gray-600 px-4 py-2">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <p className="font-bold">Available Packings :</p>
                <p>50kg and Jumbo Packing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API-BW12 Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">API-BW12</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold">BW12</span> is widely accepted for oil well and natural gas drilling applications
                under high temperatures and pressures in petroleum industries, because
                of its stable gelling characteristics.
              </p>
              <ul className="space-y-2">
                {bw12Benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="font-bold text-gray-900">Available Packings :</p>
                <p className="text-gray-700">50kg and Jumbo Packing.</p>
              </div>
            </div>
            <div className="relative">
              <img
                src={bentoniteApiBw12}
                alt="API-BW12"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* API-BW71 Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={waterDrilling}
                alt="API-BW71"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">API-BW71</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold">BW71</span> is widely accepted for oil/water well drilling applications in saline soil
                and strata.
              </p>
              <ul className="space-y-2">
                {bw71Benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="font-bold text-gray-900">Available Packings :</p>
                <p className="text-gray-700">50kg and Jumbo Packing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-6 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-lg text-center md:text-left">
            Looking for Best Quality Bentonites Quality Quartz- Silica Sand & Kaolin- China Clay – We
            have the World's Best Bentonite Mines.
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

export default OilWaterDrilling;


