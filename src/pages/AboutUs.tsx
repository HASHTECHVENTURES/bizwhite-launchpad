import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import bizwhiteFacility from "@/assets/bizwhite-facility.jpg";
import isoCertificate from "@/assets/iso-certificate.png";
import dunsCertificate from "@/assets/duns-certificate.png";
import fieoCertificate from "@/assets/fieo-certificate.png";

const AboutUs = () => {
  const whyBizWhite = [
    "FDA & GMP certified facility",
    "Maintains ISO 9001:2015 standards",
    "Well-equipped facilities that meet global standards for production",
    "Latest equipment's & technology",
    "Highly qualified & experienced QC team",
    "Products compliant to UK and US pharmacopeia",
    "Ensure customized products for customers",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 bg-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/80 text-sm mb-2">Home &gt; About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
          <div className="h-1 w-16 bg-primary mt-4"></div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold text-primary">BizWhite by Monarch Creations</span> began in history in 1995 as mines owner
                and with its parent company Hamla Mines supplying minerals to process
                companies. In 2006 at Hamla, Kutch in Gujarat State, we started our first
                highly technological processing plant of sodium bentonite assuring the
                exporters and local buyers with all the bentonite related products as per
                their requirements.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Kutch is the fastest developing states in India and is one of the most
                promising developing industrial hubs with extra ordinary infrastructure
                having two ports within a vicinity of 60 kms from the Mines. As time passed
                by and the need to centralize all the activities of Mining was sensed, we
                moved all our operations to a 50 acre plot which is only 20kms away from
                the mines and 40kms to the port. Recently we have added one more
                production plant near Bhuj.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                We are into mining, processing, exporting all types of bentonite and other
                mineral products. With our prime focus on consistent quality, high
                performance and aggressive international marketing it has gained a niche
                position in the world of Bentonite business.
              </p>
            </div>
            <div className="relative">
              <img
                src={bizwhiteFacility}
                alt="BizWhite Mines Facility"
                className="w-full rounded-lg shadow-xl border-4 border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Certifications
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              BizWhite Mines maintains the highest standards of quality and compliance, 
              certified by internationally recognized organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* ISO Certificate */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center">
              <div className="mb-4">
                <img
                  src={isoCertificate}
                  alt="ISO 9001:2015 Certificate"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">ISO 9001:2015</h3>
              <p className="text-gray-600 text-center mt-2">Quality Management System</p>
            </div>

            {/* DUNS Certificate */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center justify-center">
              <div className="mb-4">
                <img
                  src={dunsCertificate}
                  alt="DUNS Registered"
                  className="w-64 h-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">DUNS Registered</h3>
              <p className="text-gray-600 text-center mt-2">Dun & Bradstreet Verification</p>
            </div>

            {/* FIEO Certificate */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center justify-center">
              <div className="mb-4">
                <img
                  src={fieoCertificate}
                  alt="FIEO Member"
                  className="w-64 h-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">FIEO Member</h3>
              <p className="text-gray-600 text-center mt-2">Federation of Indian Export Organisations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why BizWhite Mines Section */}
      <section
        className="py-20 bg-[#1a1a1a]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Why BizWhite Mines?
          </h2>
          <div className="space-y-4">
            {whyBizWhite.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 text-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white font-medium underline decoration-primary underline-offset-4">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Strength, Quality Policy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Mission</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                With its 3 decade of experience in supplying bentonite, it's
                gradually focusing on being one of the global brands which shall
                not restrict itself just to a mineral producer but would enhance
                its brand image to solution providers. By the means of investing
                on Human Resource as well as on Technology, <span className="font-bold">BizWhite</span> intends
                to enhance the competition by adding value to its resources and
                offering solution to customers.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Vision</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold">BizWhite</span> has a vision of growing and acquiring a leading role in
                the international bentonite and other mineral business through
                the satisfaction of its clients needs with a range of high quality
                distinct products helping the customer solve their application
                problems.
              </p>
            </div>

            {/* Strength */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Strength</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold">BizWhite</span> backbone is an enormous high quality mining land
                which it owns & is considered as one of the greatest strength to
                meet its mission and vision. We strongly believe in investing and
                securing resources which appreciates over a period of time.
                Additional strengths also include the investments we do in
                infrastructure and in modernizing our processing facilities.
                <span className="font-bold"> BizWhite</span> is one of the leading Indian bentonite producer to
                mechanize the activation and processing of raw bentonite with
                various additives.
              </p>
            </div>

            {/* Quality Policy */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Quality Policy</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                Quality is together with performance and consistency, a must
                for <span className="font-bold">BizWhite</span> activity and it starts right from the mines. Before
                beginning the operations, the possible outputs are studied for
                matching them with the right industrial treatments and the
                most appropriate final production.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify mt-4">
                <span className="font-bold">BizWhite</span> feels that Quality is not a matter of chance or choice,
                but a must and key stone for its international credibility.
              </p>
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
            INQUIRE NOW 📧
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;



