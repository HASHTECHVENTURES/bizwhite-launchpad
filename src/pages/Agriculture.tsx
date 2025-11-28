import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import agricultureImage from "@/assets/agriculture.jpg";

const Agriculture = () => {
  const agroFlexBenefits = [
    "Increases water-retention and the ability for crops to access water",
    "Improves soil structure and aggregate formation",
    "Reduces the expenditure on fertilisers as the soil gains supply of soluble plant nutrients, including calcium, magnesium and potassium",
    "An appreciable increase in the yields of the crops due to improved soil health",
    "Conserves soil ecosystem",
  ];

  const agroFlexSpecs = [
    { parameter: "Appearance", unit: "-", value: "Finely Divided Powder" },
    { parameter: "Moisture", unit: "%", value: "12 max." },
    { parameter: "Free Swelling", unit: "ml/2g", value: "22 min." },
    { parameter: "pH", unit: "-", value: "9 to 11" },
    { parameter: "Particle Size (200#)", unit: "%", value: "83 min." },
  ];

  const plantShieldBenefits = [
    "Improves water and nutrient bonding of plants.",
    "Increases water fixing and water holding capacity by 10 times.",
    "Effective in making soil and carrier nutrients available.",
    "Enhances number of nitrifying bacteria.",
    "Increases plant biomass by 20%.",
    "Stimulates soil microbial parameters.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${agricultureImage})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Agriculture</h1>
          <div className="h-1 w-16 bg-primary mt-4"></div>
        </div>
      </section>

      {/* BW-AgroFlex Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">BW-AgroFlex™</h2>
              <p className="text-gray-600 italic">Pure Processed Bentonite for an Improved Farming</p>
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold italic">AgroFlex™</span> is an effective soil conditioner that will improve your soil
                structure and maximise water and fertiliser usage while retaining its
                nutrient value. It is used as a thickening, suspension agent and stability
                agent in pesticides, insecticides, fungicides and fertilizer spraying
                applications.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Our highly purified microfine sodium bentonite is eco-friendly, safe for
                aquatic systems, plants, microorganisms and can be used for soil as well as
                soilless farming. It is used as a binder, stabilizer, suspension agent, and
                rheological modifier.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-6">Benefits of using AgroFlex™</h3>
              <ul className="space-y-2">
                {agroFlexBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={agricultureImage}
                alt="AgroFlex Product"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* AgroFlex Specifications Table */}
          <div className="mt-12">
            <div className="overflow-x-auto max-w-xl">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-gray-300 px-4 py-2 text-left">Parameters</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Unit</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {agroFlexSpecs.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 px-4 py-2">{row.parameter}</td>
                      <td className="border border-gray-300 px-4 py-2">{row.unit}</td>
                      <td className="border border-gray-300 px-4 py-2">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <h4 className="font-bold text-gray-900">Available Packages :</h4>
              <p className="text-gray-700">20kg and Jumbo Packing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Shield Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={agricultureImage}
                alt="Plant Shield Product"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">PLANT SHEILD™</h2>
              <h3 className="text-xl font-bold text-gray-900">Benefits in Agriculture</h3>
              <ul className="space-y-2">
                {plantShieldBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-bold text-gray-900 mt-6">
                Guaranteed Slug Stopper ( Non-Poisonous / Eco Friendly )
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                A slug damaged garden is not a pretty sight. It is the most natural and
                effective way to maintain a photogenic garden without disturbing the
                sensitive eco-system of our surroundings.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                It's non-poisonous, 100% natural and an effective deterrent for slugs and
                snails. It is completely non-intrusive in the natural cycle of life in your
                garden, keeping it beautiful and perfectly in tune with the flora and fauna
                around.
              </p>
              <div className="mt-6">
                <h4 className="font-bold text-gray-900">Packaging :</h4>
                <p className="text-gray-700">10kg, 20kg & 50kg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-6 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-lg text-center md:text-left">
            Looking for Best Quality Quartz- Silica Sand & Kaolin- China Clay Bentonites – We
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

export default Agriculture;


