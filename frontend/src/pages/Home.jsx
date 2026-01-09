import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Clock, Home as HomeIcon, Building, CheckCircle } from "lucide-react";
import backgroundImage from "../assets/image/4.jpeg";

const Home = () => {
  const services = [
    { name: "Structural Design", icon: <Building className="w-6 h-6" />, path: "/services" },
    { name: "Vastu Consultancy", icon: <HomeIcon className="w-6 h-6" />, path: "/services" },
    { name: "Project Management", icon: <Award className="w-6 h-6" />, path: "/services" },
    { name: "Training Programs", icon: <Users className="w-6 h-6" />, path: "/training-internships" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Background Image with Optimized Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/70 to-black/60"></div>
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-transparent via-black/10 to-black/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white">
              {/* Company Tag */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600/30 to-amber-600/10 backdrop-blur-lg px-6 py-3 rounded-full mb-8 border border-amber-500/30">
                <div className="p-2 bg-amber-600/20 rounded-full">
                  <Building className="w-5 h-5 text-amber-300" />
                </div>
                <span className="text-sm font-bold tracking-widest uppercase">VEDS CONSTRUCTIONS</span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white mb-2 drop-shadow-lg">The VEDS</span>
                <span className="block text-lg md:text-xl font-normal text-amber-200 mt-2 drop-shadow">
                  Bridging the gap between vision and reality
                </span>
              </h1>

              {/* Established Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-700 to-amber-600 text-white px-6 py-3 rounded-full mb-8 shadow-lg">
                <Clock className="w-5 h-5" />
                <span className="text-base font-bold">Trusted Since 1995</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-100 mb-10 max-w-2xl leading-relaxed font-light drop-shadow-lg">
                Building excellence with <span className="font-bold text-amber-300">Vastu principles</span> for over{" "}
                <span className="font-bold text-amber-300">28 years</span>. 
                We transform your architectural visions into tangible reality through innovative engineering 
                and proven construction expertise.
              </p>

              {/* Founder Quote */}
              <div className="mb-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold text-lg">N</span>
                  </div>
                  <div>
                    <p className="text-amber-50 italic text-lg mb-3 leading-relaxed drop-shadow">
                      "A legacy of excellence continued seamlessly, a hallmark of trust & innovation."
                    </p>
                    <div className="border-t border-white/30 pt-3">
                      <p className="text-sm font-bold text-amber-100">Nagabhushana G V</p>
                      <p className="text-xs text-amber-200/80">Founder & Principal Engineer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-amber-100 mb-4 uppercase tracking-wider drop-shadow">Our Core Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      <div className="relative flex items-center gap-4 bg-white/10 backdrop-blur-md hover:bg-white/15 px-6 py-4 rounded-xl border border-white/20 transition-all duration-300 group-hover:border-amber-400/40 group-hover:translate-x-1 shadow-lg">
                        <div className="p-3 bg-gradient-to-br from-amber-600/30 to-amber-400/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <span className="text-white font-semibold text-base drop-shadow">{service.name}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-amber-400 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Stats & CTAs */}
            <div className="space-y-8">
              
              {/* Stats Card */}
              <div className="bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 text-center drop-shadow">Our Legacy in Numbers</h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { value: "28+", label: "Years Experience", highlight: true },
                    { value: "500+", label: "Projects Completed" },
                    { value: "100%", label: "Client Satisfaction" },
                    { value: "50+", label: "Professionals" }
                  ].map((stat, index) => (
                    <div 
                      key={index} 
                      className="text-center p-6 bg-gradient-to-br from-white/10 to-transparent rounded-xl border border-white/20 hover:border-amber-400/40 transition-colors duration-300 shadow-lg"
                    >
                      <div className={`text-4xl font-bold mb-2 ${stat.highlight ? "text-amber-400" : "text-white"} drop-shadow`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-200 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="space-y-4 mb-8">
                  <Link
                    to="/projects"
                    className="group relative overflow-hidden block w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white py-4 rounded-xl font-bold text-center transition-all duration-300 shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-3"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <Building className="w-5 h-5 relative z-10" />
                    <span className="relative z-10 drop-shadow">View Our Projects Gallery</span>
                  </Link>

                  <Link
                    to="/contact"
                    className="block w-full bg-gradient-to-r from-white/25 to-white/15 hover:from-white/30 hover:to-white/20 text-white py-4 rounded-xl font-bold text-center transition-all duration-300 border border-white/30 hover:border-white/40 shadow-lg"
                  >
                    Get Free Consultation
                  </Link>

                  <Link
                    to="/training-internships"
                    className="group block w-full bg-gradient-to-r from-transparent to-transparent hover:from-amber-500/20 hover:to-amber-400/10 border-2 border-amber-400 hover:border-amber-300 text-amber-400 hover:text-white py-3 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Users className="w-4 h-4" />
                    Explore Training & Internships
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </div>

                {/* Why Choose Us */}
                <div className="border-t border-white/30 pt-6">
                  <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2 drop-shadow">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                    Why Choose VEDS?
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Vision to Reality Experts",
                      "28+ Years Experience",
                      "Vastu + Modern Engineering",
                      "Quality Guaranteed",
                      "Timely Delivery",
                      "End-to-End Solutions"
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 bg-white/10 hover:bg-white/15 px-4 py-3 rounded-lg transition-colors duration-300 group shadow"
                      >
                        <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-100 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;