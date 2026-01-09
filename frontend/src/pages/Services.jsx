import React from "react";

const services = [
  {
    title: "Vastu-Integrated Architectural Design",
    desc: "We craft bespoke architectural plans for residential, commercial, and industrial projects, ensuring every layout aligns seamlessly with Vastu guidelines for optimal energy flow while embracing contemporary aesthetics and functionality.",
    icon: "🏛️"
  },
  {
    title: "Structural Engineering Excellence",
    desc: "Our seasoned structural engineers deliver robust, safe, and innovative designs, including RCC framing, seismic-resistant structures, and value engineering to optimize strength without compromising cost or quality.",
    icon: "🏗️"
  },
  {
    title: "Complete Turnkey Project Execution",
    desc: "From concept to completion, we manage end-to-end construction—site evaluation, approvals, material selection, on-site supervision, and timely handover—delivering projects built to last.",
    icon: "🔧"
  },
  {
    title: "Interior Design with Vastu Harmony",
    desc: "Transforming interiors into vibrant, positive spaces through thoughtful space planning, material choices, color schemes, and furnishings that enhance comfort, productivity, and positive vibrations.",
    icon: "🎨"
  },
  {
    title: "Vastu Consultancy & Remedial Solutions",
    desc: "Expert on-site or remote Vastu audits for existing properties, offering practical, non-demolition remedies to correct imbalances and unlock the full potential of homes, offices, and factories.",
    icon: "🧭"
  },
  {
    title: "Renovation & Retrofitting",
    desc: "Revitalizing older structures with modern upgrades, structural reinforcements, extensions, and Vastu-compliant modifications to breathe new life into your space.",
    icon: "🔄"
  },
  {
    title: "Sustainable & Eco-Friendly Designs",
    desc: "Incorporating green building practices, energy-efficient systems, natural lighting, and sustainable materials—while maintaining strict Vastu adherence for environmentally conscious developments.",
    icon: "🌿"
  },
];

// Import your image - adjust the path as needed
import serviceImage from "../assets/image/23.JPG";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
      {/* Hero Section with Image */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceImage}
            alt="Architectural Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-gray-900/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center md:text-left max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-amber-400">Services</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A perfect blend of Vastu wisdom, engineering precision, and modern design —
              delivering spaces that inspire prosperity, peace, and progress.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Design & Construction Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Each service is meticulously crafted to ensure your space not only meets 
            functional requirements but also promotes well-being and success.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Last service full width */}
        <div className="mt-12 bg-gradient-to-r from-amber-50 to-cyan-50 rounded-2xl shadow-xl overflow-hidden border border-amber-100">
          <div className="p-8 md:p-10 lg:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/6 mb-6 md:mb-0 md:mr-8">
                <div className="text-5xl text-center md:text-left">
                  {services[6].icon}
                </div>
              </div>
              <div className="md:w-5/6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {services[6].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {services[6].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to bring your vision to life?
            </h2>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Whether it's a luxurious residence, a thriving commercial complex,
              or a sustainable industrial facility — our multidisciplinary team
              ensures every project becomes a masterpiece of trust, innovation, and legacy.
            </p>
            <div className="space-y-4">
              <p className="text-2xl font-bold text-amber-400">
                Contact us today for a personalized consultation.
              </p>
              <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-amber-700">500+</div>
              <div className="text-gray-600 mt-2">Projects Completed</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-amber-700">25+</div>
              <div className="text-gray-600 mt-2">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-amber-700">98%</div>
              <div className="text-gray-600 mt-2">Client Satisfaction</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-amber-700">50+</div>
              <div className="text-gray-600 mt-2">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;