import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import silicaSandImage from "@/assets/silica-sand-powder.png";
import solarPanelImage from "@/assets/silica-sand-solar.jpg";
import constructionGradeImage from "@/assets/construction-grade.jpg";
import magnetGradeImage from "@/assets/magnet-grade.jpg";
import glassMakingImage from "@/assets/glass-making.jpg";

const SilicaSand = () => {
  const benefits = [
    "Improved efficiency",
    "Enhanced transparency",
    "Increased power output",
    "Better temperature performance",
    "Reduced degradation",
    "Improved aesthetic appeal",
  ];

  const chemicalAnalysis = [
    { parameter: "Silica Oxide as SiO2", lumps1: "99.75%", lumps2: "99.25%" },
    { parameter: "Alumina Oxide as Al2O3", lumps1: "0.18%", lumps2: "0.10%" },
    { parameter: "Ferric Oxide as Fe2O3", lumps1: "0.02%", lumps2: "0.08%" },
    { parameter: "Titanium Oxide as TiO2", lumps1: "Nil", lumps2: "Nil" },
    { parameter: "Manganese Oxide as MnO", lumps1: "Nil", lumps2: "Nil" },
    { parameter: "Calcium Oxide as CaO", lumps1: "Nil", lumps2: "Nil" },
    { parameter: "Magnesium Oxide as MgO", lumps1: "Nil", lumps2: "Nil" },
    { parameter: "Sodium Oxide as Na2O", lumps1: "Nil", lumps2: "Nil" },
    { parameter: "Potassium Oxide as K2O", lumps1: "Nil", lumps2: "Nil" },
    { parameter: "Loss on Ignition", lumps1: "0.08%", lumps2: "0.05%" },
    { parameter: "Packing", lumps1: "50Kgs/1000Kgs", lumps2: "Loose in Bulk" },
    { parameter: "Shipment", lumps1: "By Container", lumps2: "Bulk Vessel" },
    { parameter: "Port of Loading", lumps1: "West/East Coast of India", lumps2: "West/East Coast of India" },
    { parameter: "Available Grades", lumps1: "100/200/250/300/500 BSS", lumps2: "" },
    { parameter: "", lumps1: "10/20 6/12 30/150/20/60", lumps2: "upto 200 mm" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Breadcrumb pageName="Silica Sand" />

      {/* BizWhite Silica-SG11 Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                BizWhite Silica-SG11 Low-iron, Low-cost Silica sand
              </h2>
              <div className="h-1 w-16 bg-primary"></div>
              <p className="text-gray-700 leading-relaxed text-justify">
                The purity of the silica sand used in solar panel production is critical to the
                efficiency and longevity of the panel. Even small amounts of impurities,
                such as high iron and low silica can significantly reduce the performance of
                the panel, particularly in terms of its ability to convert sunlight into
                electricity.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                The production of BizWhite Silica-SG11 low iron silica sand typically involves
                several steps, including washing, spiral magnetic separating, scrubbing, and
                leaching to remove impurities.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                The resulting sand is then dried and screened to ensure that it meets the
                required specifications for use in solar panel manufacturing.
              </p>
            </div>
            <div className="relative">
              <img
                src={solarPanelImage}
                alt="Solar Panel with Silica Sand"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={silicaSandImage}
                alt="Silica Sand Powder"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Benefits of Silica Sand in Solar Panels
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed text-justify mt-6">
                Using BizWhite Silica-SG11 helps manufacturers meet industry standards
                for solar panel efficiency and quality. manufacturers can differentiate their
                products and gain a competitive edge in the market.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify mt-4">
                The use of BizWhite Silica-SG11 is crucial for producing high-efficiency solar
                panels, making it an essential component in the renewable energy sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Images */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-4 overflow-hidden aspect-square">
                <img
                  src={constructionGradeImage}
                  alt="Construction Grade"
                  className="w-[200%] h-[120%] object-cover"
                  style={{ objectPosition: 'left top' }}
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Construction Grade</h4>
            </div>
            <div className="text-center">
              <div className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-4 overflow-hidden aspect-square">
                <img
                  src={magnetGradeImage}
                  alt="Magnet Grade"
                  className="w-[200%] h-[120%] object-cover"
                  style={{ objectPosition: 'right top' }}
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Magnet Grade</h4>
            </div>
          </div>
        </div>
      </section>

      {/* About Quartz Silica Sand */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={silicaSandImage}
                alt="Silica Sand Powder"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-justify">
                We offer high quality White Quartz- Silica Sand that is in huge demand in
                the markets. Our Quartz Silica Sand is founded & manufactured in Kutch
                (Gujarat-India) silica sand provides satisfactory result in chemical analytical
                result. We offer Quartz Silica Sand at very affordable price to adjacent
                states, national & multi national companies engaged in the manufacturing
                of glass making, foundries, abrasive, tennis coating, grinding media etc. We
                are well reckoned as one of the fastest emerging Silica Sand manufacturers
                and suppliers based in India.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Silicon is the most abundant element on the earth's surface and in the form
                of silica it is consumed in great numbers for industrial uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Application Area</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-justify">
                Quartz- Silica sand has many uses, including making glass. It is the key
                ingredient in windows, jars and bottles. Manufacturers use it in light bulbs,
                florescent tubes, televisions and computers. A family commonly uses silica
                on the dinner table in the forms of leaded crystal, drinking glasses and
                dishes, according to the Material Products Association.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Silica has a high melting point, making it an ideal product for use in
                foundries. An item pressed into the sand leaves an imprint, which the
                foundry fills with molten metal. Once the cast has hardened, workers lift it
                from the sand mold and brush away any remaining sand.
              </p>
              <img
                src={glassMakingImage}
                alt="Glass Making"
                className="w-full rounded-lg shadow-xl mt-6"
              />
            </div>
            <div className="space-y-6">
              <img
                src={silicaSandImage}
                alt="Silica Sand Powder"
                className="w-full rounded-lg shadow-xl"
              />
              <p className="text-gray-700 leading-relaxed text-justify">
                Brick manufacturers mix sand with clay to form their products. This
                addition helps to create interesting-looking materials for building homes.
                Other manufactures use it to create tiles, concrete blocks and roofing
                materials.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Silica is a natural abrasive. Used in sandblasting machines, it cuts through
                corrosion to prepare surfaces for painting or other finishes. Silicon dioxide,
                glued to strong paper, becomes sandpaper.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Finely ground sand is also essential in the manufacture of ceramic items.
                Such items range from bathroom fixtures to coffee mugs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chemical Analysis Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Typical Chemical Analysis</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Powder</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Lumps (1)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Lumps (2)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemicalAnalysis.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-gray-300 px-4 py-2">{row.parameter}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.lumps1}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.lumps2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-justify">
                The information and data contained herein are believed to be accurate, but the
                manufacturer makes no warranty with respect thereto and disclaims
                responsibility for reliance there on. This data relates only to the specific material
                described herein, and does not relate to use in connection with any other
                material or any process.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold">BizWhite</span> makes no warranties, express or implied, concerning this product. No
                warranty of fitness for any particular purpose is made, and we assume no
                responsibility whatever for any use of this product. This product should be used
                by properly trained personnel, and in compliance with applicable health, safety
                laws and regulations.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-4 mt-6">
                <p className="text-gray-800 font-semibold">
                  <span className="text-red-600">WARNING :</span> The product contains free silica(Quartz), Repeated and
                  prolonged inhalation of dust in excess of TLV-TWA may cause delayed
                  lung injury (silicosis). Follow applicable OSHA, MSHA or NIOSH standards
                  for crystalline silica.
                </p>
              </div>
              <div className="mt-6">
                <h4 className="font-bold text-gray-900">Available Packages :</h4>
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

export default SilicaSand;



