import React from "react";
// import founderImage from "../assets/image/founder.jpeg"; // optional image

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
        About Vastu Engineers & Designers
      </h1>

      {/* Company Story */}
      <div className="md:flex md:gap-8 items-center mb-12">
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-4 leading-relaxed">
            Established in 1995 by visionary founder <strong>Nagabhushana G V</strong>, 
            Vastu Engineers & Designers stands as a beacon of enduring excellence 
            in engineering and architectural innovation. We blend timeless principles 
            of Vastu Shastra with modern structural engineering to create spaces 
            that foster prosperity, peace, and progress.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our hallmark lies in the perfect synergy of trust, precision, and innovation, 
            delivering projects that exceed expectations—from residential masterpieces 
            and commercial complexes to industrial buildings and renovations.
          </p>
        </div>
        {/* <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={founderImage}
            alt="Founder Nagabhushana G V"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div> */}
      </div>

      {/* Vision & Mission */}
      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision & Mission</h2>
        <p className="text-gray-700 mb-2">
          <strong>Vision:</strong> Creating harmonious spaces that elevate lives and businesses.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Mission:</strong> Deliver innovative, sustainable, and client-focused engineering solutions.
        </p>
        <p className="text-gray-700">
          <strong>Values:</strong> Trust, Innovation, Precision, Sustainability.
        </p>
      </div>

      {/* Milestones / Achievements */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-600 mb-2">28+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-600 mb-2">500+</h3>
            <p className="text-gray-700">Projects Completed</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-600 mb-2">100%</h3>
            <p className="text-gray-700">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
