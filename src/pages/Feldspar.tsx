import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import feldsparImage from "@/assets/feldspar.jpg";
import feldsparPotashGrits from "@/assets/feldspar-potash-grits.jpg";
import feldsparSodaPowder from "@/assets/feldspar-soda-powder.jpg";

const Feldspar = () => {
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
          <p className="text-white/80 text-sm mb-2">Home &gt; Feldspar</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Feldspar</h1>
          <div className="h-1 w-16 bg-primary mt-4"></div>
        </div>
      </section>

      {/* Potash & Soda Feldspar Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">POTASH & SODA FELDSPAR</h2>
          <div className="h-1 w-16 bg-primary mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-justify">
                Potassium feldspar refers to a number of minerals in the feldspar group,
                and containing potassium: Orthoclase (endmember formula KAlSi₃O₈), an
                important tectosilicate mineral that forms igneous rock. Microcline,
                chemically the same as orthoclase, but with a different crystalline structure.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Soda Feldspar is generally a clean white mineral which sources sodium,
                alumina, and silica along with some potassium and calcium. Albite mineral
                from which soda feldspar is derived is often tends to be white in
                appearance compared with the pinkish hue of orthoclase mineral from
                which potash feldspar is ground.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Feldspar is used as a flux in ceramic and glass industries. It also adds
                strength to the body. Feldspar is a rare occurrence of extremely pure
                mineral free from mica. The chief use of Feldspar is in the Ceramic and
                Glass Industries. In ceramic bodies, the main vitrifying (fluxing) agent is
                feldspar.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify font-semibold">
                Application Industries: Ceramics, Tiles and Sanitaryware, Glazes, Glass Industry, Dental
                ceramics, Bonding agent for abrasives,
                wheels, discs, and other shapes.
              </p>
              <div className="mt-6">
                <p className="text-gray-900 font-bold">Product Variants:</p>
                <p className="text-gray-700">Granular Particles</p>
                <p className="text-gray-700">Powder form (100-350 Mess BSS)</p>
                <p className="text-gray-700">Lumps (Dressed ore in raw form)</p>
              </div>
              <div className="mt-6">
                <p className="text-gray-700 leading-relaxed text-justify">
                  <span className="font-bold">Packing:</span> The standard packing units are 50 kg
                  HDPE Bags, 1000 Kg, and 1350 Kg jumbo bags.
                  However, we can also make the packing units as
                  per customer requirements.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={feldsparImage}
                alt="Feldspar"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Images */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <img
                src={feldsparPotashGrits}
                alt="Potash Feldspar Grits"
                className="w-full rounded-lg shadow-xl mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900">Potash Feldspar Grits</h4>
            </div>
            <div className="text-center">
              <img
                src={feldsparSodaPowder}
                alt="Soda Feldspar Powder"
                className="w-full rounded-lg shadow-xl mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900">Soda Feldspar Powder</h4>
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

export default Feldspar;

