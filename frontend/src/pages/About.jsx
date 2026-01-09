import React from "react";
import backgroundImage from "../assets/image/26.JPG";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div 
        className="relative h-[500px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-amber-900/70">
          <div className="max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Vastu Engineers & Designers
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Blending Ancient Vastu Wisdom with Modern Engineering Excellence Since 1995
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Founder Story Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-amber-600 pl-4">
                Our Legacy & Founder
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Established in 1995 by visionary founder <span className="font-semibold text-amber-700">Nagabhushana G V</span>, 
                  Vastu Engineers & Designers stands as a beacon of enduring excellence 
                  in engineering and architectural innovation.
                </p>
                <p>
                  We uniquely blend timeless principles of Vastu Shastra with cutting-edge 
                  structural engineering to create spaces that foster prosperity, peace, 
                  and sustainable progress.
                </p>
                <p>
                  Our hallmark lies in the perfect synergy of trust, precision, and innovation, 
                  delivering projects that consistently exceed expectations—from residential 
                  masterpieces and commercial complexes to industrial buildings and strategic 
                  renovations.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-gray-50 p-8 rounded-xl shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Architectural Excellence</h3>
                    <p className="text-sm text-gray-600">28+ years of proven expertise</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Vastu-Compliant Designs</h3>
                    <p className="text-sm text-gray-600">Harmonious living spaces</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Award-Winning Approach</h3>
                    <p className="text-sm text-gray-600">500+ successful projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission & Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-b from-amber-50 to-white p-8 rounded-xl shadow-lg border-t-4 border-amber-600">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be the foremost engineering firm creating harmonious spaces that 
              elevate lives and businesses through sustainable, innovative design.
            </p>
          </div>
          
          <div className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-xl shadow-lg border-t-4 border-gray-600">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              Deliver innovative, sustainable, and client-focused engineering solutions 
              that stand the test of time while respecting traditional wisdom.
            </p>
          </div>
          
          <div className="bg-gradient-to-b from-amber-50 to-white p-8 rounded-xl shadow-lg border-t-4 border-green-600">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Values</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                Integrity & Trust
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                Innovation & Excellence
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                Precision & Quality
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                Sustainability & Harmony
              </li>
            </ul>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-amber-600">Milestones</span> & Achievements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center group hover:border-amber-200">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-amber-600">📅</span>
              </div>
              <h3 className="text-5xl font-bold text-amber-600 mb-3">28+</h3>
              <p className="text-gray-800 font-semibold text-lg mb-2">Years of Excellence</p>
              <p className="text-gray-600 text-sm">
                Three decades of engineering innovation and architectural mastery
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center group hover:border-amber-200">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-amber-600">🏗️</span>
              </div>
              <h3 className="text-5xl font-bold text-amber-600 mb-3">500+</h3>
              <p className="text-gray-800 font-semibold text-lg mb-2">Projects Completed</p>
              <p className="text-gray-600 text-sm">
                From residential to commercial, delivering excellence in every project
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center group hover:border-amber-200">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-amber-600">⭐</span>
              </div>
              <h3 className="text-5xl font-bold text-amber-600 mb-3">100%</h3>
              <p className="text-gray-800 font-semibold text-lg mb-2">Client Satisfaction</p>
              <p className="text-gray-600 text-sm">
                Consistently exceeding expectations and building lasting relationships
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-amber-900 to-gray-900 text-white rounded-2xl p-12 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Engineering Philosophy</h2>
            <p className="text-xl text-amber-100 leading-relaxed">
              "At Vastu Engineers & Designers, we believe that true architectural 
              excellence lies in the perfect harmony between ancient wisdom and 
              modern innovation. Every structure we design is not just built—it's 
              thoughtfully created to enhance lives, respect nature, and stand as 
              a testament to quality for generations."
            </p>
            <div className="mt-8 pt-8 border-t border-amber-300/30">
              <p className="text-lg font-semibold">Nagabhushana G V</p>
              <p className="text-amber-200">Founder & Chief Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;