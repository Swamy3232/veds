import React from "react";
import backgroundImage from "../assets/image/4.jpeg";

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for readability */}
      <div className="bg-white bg-opacity-90 p-8 rounded-xl max-w-5xl mx-4 shadow-lg">
        {/* Hero Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Vastu Engineers & Designers
        </h1>

        {/* Intro Text */}
        <p className="text-gray-700 text-md md:text-lg mb-4 leading-relaxed">
          Established in 1995 by visionary founder <strong>Nagabhushana G V</strong>, 
          Vastu Engineers & Designers stands as a beacon of enduring excellence 
          in the realm of engineering and architectural innovation. With nearly 
          three decades of unwavering dedication, we have seamlessly carried 
          forward a rich legacy that blends timeless principles of Vastu Shastra 
          with cutting-edge modern design and structural engineering.
        </p>

        <p className="text-gray-700 text-md md:text-lg mb-4 leading-relaxed">
          We are more than just engineers and designers—we are creators of harmonious spaces 
          that foster prosperity, peace, and progress. Our hallmark lies in the perfect synergy 
          of trust, precision, and groundbreaking innovation, delivering projects that not only meet 
          but exceed expectations. From residential masterpieces and commercial marvels to 
          industrial complexes and renovations, every creation reflects our commitment to 
          quality, sustainability, and client-centric solutions.
        </p>

        <p className="text-gray-700 text-md md:text-lg mb-6 leading-relaxed">
          Guided by a team of seasoned professionals, we integrate the ancient wisdom of Vastu for 
          positive energy flow with contemporary techniques for structural integrity and aesthetic brilliance. 
          This unique approach ensures that our designs are not merely buildings, but vibrant environments 
          that elevate lives and businesses.
        </p>

        {/* Company Info Box */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Company Information</h2>
          <ul className="text-gray-700 space-y-1">
            <li><strong>Company:</strong> Vastu Engineers & Designers</li>
            <li><strong>Founder:</strong> Nagabhushana G V</li>
            <li><strong>Established:</strong> 1995</li>
            <li className="italic">
              "A legacy of excellence continued seamlessly, a hallmark of trust & innovation."
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
