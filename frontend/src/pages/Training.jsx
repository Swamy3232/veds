import React from "react";
import OIP from "../assets/image/OIP.webp";

const Training = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section with Image */}
      <div className="flex flex-col lg:flex-row gap-10 mb-16">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Training & Internship <span className="text-amber-700">Opportunities</span>
          </h1>
          <div className="h-1 w-24 bg-amber-600 mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            At <strong className="text-amber-700">The Veds</strong>, we believe in nurturing
            young talent by providing practical exposure, real-time project
            experience, and professional mentorship in civil engineering and design.
          </p>
          <div className="flex items-center space-x-4 mt-8">
            <a
              href="mailto:Thevedsgroup@gmail.com"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Apply Now
            </a>
            <a
              href="#contact"
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
            <img
                src={OIP}
              alt="Civil Engineering Training"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Program</h2>
          <div className="h-1 w-16 bg-amber-600 mx-auto"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Our training and internship programs are designed to bridge the gap
            between academic learning and industry requirements. Participants gain
            hands-on experience in live projects, exposure to modern construction
            practices, and insights into Vastu-based planning combined with
            contemporary engineering techniques.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-xl shadow-lg border border-amber-100">
          <div className="flex items-center mb-6">
            <div className="bg-amber-100 p-3 rounded-lg mr-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Who Can Apply</h3>
          </div>
          <ul className="space-y-3">
            {[
              "Civil Engineering students",
              "Architecture students",
              "Diploma holders",
              "Fresh graduates",
              "Working professionals seeking practical exposure"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-xl shadow-lg border border-amber-100">
          <div className="flex items-center mb-6">
            <div className="bg-amber-100 p-3 rounded-lg mr-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">What You Will Learn</h3>
          </div>
          <ul className="space-y-3">
            {[
              "Site execution and supervision",
              "Structural drawings & design basics",
              "Estimation and costing",
              "Vastu principles in real projects",
              "Project management fundamentals"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                {item}
              </li>
            ))}  
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Train With Us?</h2>
          <div className="h-1 w-16 bg-amber-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "🏗️", title: "Industry Experience", desc: "Nearly 30 years of industry expertise" },
            { icon: "👨‍🏫", title: "Expert Guidance", desc: "Mentorship from experienced professionals" },
            { icon: "🏢", title: "Real Projects", desc: "Exposure to residential & commercial projects" },
            { icon: "🎯", title: "Career Focused", desc: "Practical learning for career growth" },
            { icon: "🤝", title: "Professional Environment", desc: "Supportive and collaborative workspace" },
            { icon: "📈", title: "Skill Development", desc: "Comprehensive technical & soft skills training" }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Contact for Training & Internship</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-lg mr-4">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:Thevedsgroup@gmail.com"
                  className="text-amber-100 hover:text-white transition duration-300"
                >
                  Thevedsgroup@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-lg mr-4">
                <span className="text-xl">📞</span>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <a
                  href="tel:9606601604"
                  className="text-amber-100 hover:text-white transition duration-300"
                >
                  +91 96066 01604
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Office Location</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-amber-100 p-3 rounded-lg mr-4">
                <span className="text-xl text-amber-600">📍</span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  NO.1/1 Varadharajanna Building,<br />
                  Kurudusonnenahalli Road,<br />
                  Kodigehalli,<br />
                  Bangalore – 560067.
                </p>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="mt-8">
              <div className="h-56 bg-gradient-to-r from-amber-50 to-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <span className="text-4xl">🗺️</span>
                  <p className="text-gray-600 mt-2">Google Maps Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-2xl p-10 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
          Join our training program and gain the practical skills needed for a successful career in civil engineering.
        </p>
        <a
          href="mailto:Thevedsgroup@gmail.com"
          className="inline-block bg-white text-amber-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
        >
          Send Your Resume
        </a>
      </div>
    </div>
  );
};

export default Training;