import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import quartzImage from "@/assets/quartz.jpg";
import quartzMain from "@/assets/quartz-main.jpg";
import quartzGrade1 from "@/assets/quartz-grade-1.jpg";
import quartzGrade2 from "@/assets/quartz-grade-2.jpg";
import quartzGrade3 from "@/assets/quartz-grade-3.jpg";
import quartzPowder from "@/assets/quartz-powder.jpg";

const Quartz = () => {
  const grades = [
    { size: "2.5 – 4.0mm", name: "A- Grade Quartz Grits" },
    { size: "1.2 – 2.5mm", name: "A- Grade Quartz Grits" },
    { size: "0.3 – 0.7mm", name: "A- Grade Quartz Grits" },
    { size: "325 mesh", name: "A- Grade Quartz Powder" },
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
          <p className="text-white/80 text-sm mb-2">Home &gt; Quartz</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Quartz</h1>
          <div className="h-1 w-16 bg-primary mt-4"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold">Quartz</span> is a hard, crystalline mineral composed of silica. The atoms are
                linked in a continuous framework of SiO₄ silicon–oxygen tetrahedra, with
                each oxygen being shared between two tetrahedra, giving an
                overall chemical formula of SiO₂. Quartz is the second most
                abundant mineral in Earth's continental crust.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                It is hard, brittle, transparent material with a density of 2649 kg/m³ and a
                melting point of 1432°C. This naturally available quartz is mined by the
                company and processed for achieving the various size fractions as per
                customer's requirements.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Once the high purity Quartz is procured from the mines, the material
                undergoes manual sorting, advanced colour sorting, state- of- the- art
                magnet systems, proper sizing with high frequency vibrations to achieve
                the best material.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify font-semibold">
                Application industries: Engineering stone, Ceramics, Refractory,
                Semiconductor, Glass.
              </p>
            </div>
            <div className="relative">
              <img
                src={quartzMain}
                alt="Quartz"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quartz Grades */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {grades.map((grade, index) => {
              const gradeImages = [quartzGrade1, quartzGrade2, quartzGrade3, quartzPowder];
              return (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-full w-48 h-48 mx-auto flex items-center justify-center shadow-lg mb-4 overflow-hidden">
                    <img
                      src={gradeImages[index]}
                      alt={grade.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{grade.size}</h4>
                  <p className="text-gray-700">{grade.name}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-700">
              <span className="font-bold">Available Packages:</span> 50kg and Jumbo Packing.
            </p>
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

export default Quartz;

