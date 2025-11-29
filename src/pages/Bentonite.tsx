import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import oilBoostImage from "@/assets/oil-boost.jpg";
import drillingImage from "@/assets/drilling.jpg";
import agricultureImage from "@/assets/agriculture.jpg";
import clayCatalystImage from "@/assets/clay-catalyst.jpg";
import bentoniteOverview from "@/assets/bentonite-overview.jpg";

const Bentonite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Breadcrumb pageName="Bentonite" backgroundImage={bentoniteOverview} />

      {/* What is Bentonite Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">What is Bentonite?</h2>
              <div className="h-1 w-16 bg-primary"></div>
              <p className="text-gray-700 leading-relaxed text-justify">
                In very simple words Bentonite is a clay belonging to the smectite family
                mainly composed of montmorillonite and originated by volcanic ashes that
                sedimented into different areas and underwent hydrolyzation processes by
                different kinds of waters and consequently enriching in Ca or Na or Mg or K
                or H and so giving origin to Na+ Bentonite – natural sodium bentonite – or
                Ca++ Bentonite – calcium bentonite – or H+ bentonite – acid bentonite.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                The weather changes bring about a cellular characteristic like popcorn or a
                frothy structure around because of swelling and shrinking on wetting and
                drying. The bentonite has a waxy appearance whereas bentonites formed
                from volcanic ash gives it a hard structure. Bentonite in India, Gujarat has a
                large amount of bentonite deposits. Almost three fourth of the bentonite
                deposits are in Bhavnagar and Kutch districts in Gujarat. As many as 162
                leases are in kutch and the rest in Bhavnagar. The formation of bentonite
                here is associated here with the deccan trap rocks and is also confined to
                alteration of ash beds. Bentonite mostly occurs in oval shaped bodies 3 to
                10m thick covered by a residual layer of 1.5 to 3m. The soil is sticky and
                gives a frothy feel.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                However being a versatile mineral it has a wide range of industrial and
                consumer applications. Drilling fluids for oil, gas, mineral and water
                exploration binding agents for foundry and iron ore palletisation
                operations, main raw material to beauty products, consume a large amount
                of bentonite each year.
              </p>
            </div>
            <div className="relative">
              <img
                src={bentoniteOverview}
                alt="Bentonite"
                loading="lazy"
                decoding="async"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bentonite Products for Individual Industries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            bentonite products for individual industries
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Oil Well Drilling */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Oil Well Drilling</h3>
              <img
                src={drillingImage}
                alt="Oil Well Drilling"
                loading="lazy"
                decoding="async"
                className="w-full rounded-lg shadow-xl mb-4"
              />
              <p className="text-gray-700 leading-relaxed text-justify mb-4">
                Bentonite is as a mud constituent for oil- and water- well drilling. Its role is
                mainly to seal the borehole walls, to remove drill cuttings and to lubricate the
                cutting head.
              </p>
              <a
                href="/oil-water-drilling"
                className="inline-block bg-gray-900 text-white px-6 py-2 rounded font-semibold hover:bg-gray-800 transition-colors"
              >
                READ MORE
              </a>
            </div>

            {/* Agriculture */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Agriculture</h3>
              <img
                src={agricultureImage}
                alt="Agriculture"
                loading="lazy"
                decoding="async"
                className="w-full rounded-lg shadow-xl mb-4"
              />
              <p className="text-gray-700 leading-relaxed text-justify mb-4">
                Whether for the home gardener or agricultural farming, look to improve your
                soil and its performance with the addition of Kutch Bentonite.
              </p>
              <a
                href="/agriculture"
                className="inline-block bg-gray-900 text-white px-6 py-2 rounded font-semibold hover:bg-gray-800 transition-colors"
              >
                READ MORE
              </a>
            </div>

            {/* Bleaching Earth */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bleaching Earth</h3>
              <img
                src={oilBoostImage}
                alt="Bleaching Earth"
                loading="lazy"
                decoding="async"
                className="w-full rounded-lg shadow-xl mb-4"
              />
              <p className="text-gray-700 leading-relaxed text-justify mb-4">
                Bleaching Earth is Activated adsorbent used for the general purpose of
                decolorisation and purification of vegetable mineral oils and edible oils
              </p>
              <a
                href="/bleaching-earth"
                className="inline-block bg-gray-900 text-white px-6 py-2 rounded font-semibold hover:bg-gray-800 transition-colors"
              >
                READ MORE
              </a>
            </div>

            {/* Clay Catalysts */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Clay Catalysts</h3>
              <img
                src={clayCatalystImage}
                alt="Clay Catalysts"
                loading="lazy"
                decoding="async"
                className="w-full rounded-lg shadow-xl mb-4"
              />
              <p className="text-gray-700 leading-relaxed text-justify mb-4">
                Clays are also known to act as radical catalysts. Acid catalyst nature of clay
                enhances the reactions involving the olefins and aromatics.
              </p>
              <a
                href="/clay-catalysts"
                className="inline-block bg-gray-900 text-white px-6 py-2 rounded font-semibold hover:bg-gray-800 transition-colors"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-6 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-lg text-center md:text-left">
            Looking for a Best Quality Quartz- Silica Sand & Kaolin- China Clay, Bentonite
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

export default Bentonite;



