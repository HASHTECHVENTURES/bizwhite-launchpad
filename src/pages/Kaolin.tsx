import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import kaolinImage from "@/assets/kaolin.jpg";
import kaolinWhiteUltra from "@/assets/kaolin-white-ultra.jpg";
import kaolinPaperRolls from "@/assets/kaolin-paper-rolls.jpg";
import kaolinCeramics from "@/assets/kaolin-ceramics.jpg";
import kaolinPowderExact from "@/assets/kaolin-powder-exact.jpg";

const Kaolin = () => {
  const applications = [
    "Kaolin for Paper & Pulp",
    "Kaolin for Paints, Inks & Coatings",
    "Kaolin for Refractories",
    "Meta Kaolin for RMC",
    "Kaolin for Agrochemicals",
    "Kaolin for Rubber & Plastics",
    "Kaolin for Soaps & Detergents",
    "Kaolin for Fiberglass",
    "Kaolin for Ceramics",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${kaolinImage})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/80 text-sm mb-2">Home &gt; Kaolin – China Clay</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Kaolin – China Clay</h1>
          <div className="h-1 w-16 bg-primary mt-4"></div>
        </div>
      </section>

      {/* World Class Ultra White Kaolin Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                World Class Ultra White Kaolin – Multi-tasking Customised
              </h2>
              <div className="h-1 w-16 bg-primary"></div>
              <p className="text-gray-700 leading-relaxed text-justify">
                For several decades, <span className="font-bold">BizWhite</span> has been mining, processing and supplying
                kaolin products, from its reserves in Gujarat. On recognizing the high
                demand for this multi-usage mineral and also the shortages of high quality
                kaolin. We have achieved a distinct edge, when it comes to china clay
                lumbs, pure china clay, kaolin china clay etc. We have positioned ourselves
                as one of the overriding kaolin china clay manufacturers and exporters
                from India. Our china clay products are immensely used in the
                manufacturing of ceramics, papers, colours, vitrified tiles, soap, ultramarine
                and in various other purposes. Translucent quality, greater strength and
                bright white appearance are the unique features of our China clay lumbs.
                Our Chinese clay is accessible at the least market prices.
              </p>
            </div>
            <div className="relative">
              <img
                src={kaolinWhiteUltra}
                alt="Kaolin China Clay"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Paper Rolls Image and Applications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={kaolinPaperRolls}
                alt="Paper Manufacturing"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Applications of Kaolin</h3>
              <div className="h-1 w-16 bg-primary"></div>
              <p className="text-gray-700 leading-relaxed text-justify">
                Kaolin has a range of applications which are grouped in three main areas:
                paper, ceramics and performance minerals.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Demand is most in the manufacture of paper where it performs two
                separate functions- as a filler to improve printing characteristics and as a
                coating pigment to enhance the surface properties of the paper such as the
                brightness, smoothness, gloss and ink receptivity etc.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                In the ceramics industry the main function of kaolin is to impart whiteness .
                Its major uses are in vitreous china sanitaryware, table ware, wall tiles,
                electrical porcelain.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Kaolin is used in refractories where it is valued for its alumina content.
                Performance mineral applications use kaolin as fillers in paint, rubber ,
                plastics and adhesives and sealants and pharmaceuticals. Other important
                uses include the manufacture of white cement and glass fiber.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties of Kaolin */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Properties of Kaolin</h3>
              <div className="h-1 w-16 bg-primary"></div>
              <p className="text-gray-700 leading-relaxed text-justify">
                Kaolin has a range of applications which are grouped in three main areas:
                paper, ceramics and performance minerals. Demand is most in the
                manufacture of paper where it performs two separate functions – as a filler
                to improve printing characteristics and as a coating pigment to enhance the
                surface properties of the paper such as the brightness, smoothness, gloss
                and ink receptivity etc. In the ceramics industry the main function of kaolin
                is to impart whiteness. Its major uses are in vitreous china sanitary ware,
                tableware, wall tiles, electrical porcelain.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Kaolin is used in refractories where it is valued for its alumina content.
                Performance mineral applications use kaolin as fillers in paint, rubber,
                plastics and adhesives and sealants and pharmaceuticals. Other important
                uses include the manufacture of white cement and glass fiber.
              </p>
            </div>
            <div>
              <img
                src={kaolinCeramics}
                alt="Ceramics"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exact Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={kaolinPowderExact}
                alt="Kaolin Powder"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Exact Solutions for Exact Applications
              </h3>
              <div className="h-1 w-16 bg-primary"></div>
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold">BizWhite</span> is able to offer Kaolin grades having premium brightness, fine
                particle size with controlled distribution range, fine particle size with low
                grit level and other specific properties as demanded by the application.
                Each grade is chemically modified and designed to boost end product
                performance and properties in the specific application.
              </p>
              <ul className="space-y-2 mt-6">
                {applications.map((app, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-gray-900 font-semibold">{app}</span>
                  </li>
                ))}
              </ul>
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

export default Kaolin;



