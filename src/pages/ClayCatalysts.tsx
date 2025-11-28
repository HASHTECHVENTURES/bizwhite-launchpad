import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import clayCatalystImage from "@/assets/clay-catalyst.jpg";

const ClayCatalysts = () => {
  const physicalProperties = [
    { parameter: "Loose Bulk Density", unit: "gm/l", value: "700±50" },
    { parameter: "Free Moisture (2 hrs,110°C)", unit: "%", value: "6 max" },
    { parameter: "pH (10% suspension filters)", unit: "(10% Suspension filtrate)", value: "2.5 - 3.5" },
    { parameter: "Free Acidity", unit: "mg KOH/gm", value: "7 max" },
    { parameter: "Total Acidity", unit: "mg KOH/gm", value: "23 – 26" },
    { parameter: "Surface Area", unit: "(BET)", value: "300±30" },
  ];

  const particleSizeDistribution = [
    { sieveRange: "More than 2 mm", unit: "%", value: "10.0 max" },
    { sieveRange: "2.0 – 0.25 mm", unit: "%", value: "85.0 min" },
    { sieveRange: "Less than 0.25 mm", unit: "%", value: "50.0 max" },
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
          <p className="text-white/80 text-sm mb-2">Home &gt; Clay Catalysts</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Clay Catalysts</h1>
          <div className="h-1 w-16 bg-primary mt-4"></div>
        </div>
      </section>

      {/* BW-Clay Catalyst Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">BW-Clay Catalyst</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold">Bizwhite Activated</span> Clay Catalyst is a highly active, low moisture
                granulated acid-activated montmorillonite with unique surface chemistry.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                In fixed bed aromatics purification, BW Activated Clay Catalyst and
                adsorbent offer enhanced process unit economics, superior product
                quality, and dependable performance. Eliminates olefins that may
                contaminate adsorption and catalytic units downstream. Its high catalytic
                activity, high acidity, and distinctive surface chemistry enable longer bed
                cycles. helps products fulfill strict requirements for Bromine Index and Acid
                Wash Color. Particle breakdown during vessel loading and unit operations
                is minimized by good physical integrity.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                In the petroleum refining and petrochemical industries, the initialism BTX
                refers to mixtures of benzene, toluene, and the three xylene isomers, all of
                which are aromatic hydrocarbons. The xylene isomers are distinguished by
                the designations ortho- (or o-), meta- (or m-), and para- (or p-) as
                indicated in the adjacent diagram. If ethylbenzene is included, the mixture
                is sometimes referred to as BTEX.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold">Bizwhite Clay Catalyst</span> is included in the universal oil product duty
                specification for clay treating of BTX. It is a granular solid acid catalyst
                manufactured from high-quality montmorillonite of our Kutch area in India.
                <span className="font-bold"> Bizwhite Clay Catalyst</span> is developed for adsorption and acid catalyst in
                fixed bed reactors. It is a product designed with a highly porous inner
                structure. This results in an accessible active site for reactants and lowers
                diffusion limitation for byproducts.
              </p>
            </div>
            <div className="relative">
              <img
                src={clayCatalystImage}
                alt="Clay Catalyst"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grades and Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={clayCatalystImage}
                alt="Clay Catalyst Grades"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Grades of Bizwhite Clay Catalyst</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-gray-900 font-semibold">Grade : BW-200</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-gray-900 font-semibold">Grade : BW-200X</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-gray-900 font-semibold">Grade : BW250X</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8">Typical Physical Property</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {physicalProperties.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                        <td className="border border-gray-300 px-4 py-2">{row.parameter}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.unit}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Particle Size Distribution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Typical Particle Size Distribution</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                The particle size distribution is determined by sieve analysis of dry granules.
                The following average residue was found on different fine sieves.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Sieve range</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Unit</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {particleSizeDistribution.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-gray-300 px-4 py-2">{row.sieveRange}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.unit}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8">Packaging</h3>
              <p className="text-gray-700">50kg and Jumbo Packing.</p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8">Usage</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold">BizWhite Clay Catalyst</span> is designed for Olefin removal from BTX. It works
                excellent for the selective removal of olefins from Benzene/Toluene and
                Heavy Reformate (mainly Xylenes).
              </p>
            </div>
            <div>
              <img
                src={clayCatalystImage}
                alt="Particle Distribution"
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

export default ClayCatalysts;


