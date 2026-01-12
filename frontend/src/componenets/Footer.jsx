import React from "react";
import logo from "../assets/image/Logo.jpeg";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="The VEDS" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Established in 1995, The VEDS blends
              timeless Vastu wisdom with modern engineering excellence to
              create harmonious, sustainable spaces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300">
              {['Home', 'About Us', 'Services', 'Projects', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-amber-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700 inline-block">
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-300">
              {[
                'Architectural Design (Vastu)',
                'Structural Engineering',
                'Turnkey Construction',
                'Interior Design',
                'Vastu Consultancy',
                'Renovation & Retrofitting'
              ].map((service) => (
                <li key={service} className="text-sm flex items-start">
                  <svg className="w-3 h-3 text-amber-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <FaPhone className="text-amber-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <div className="space-y-1">
                    <a href="tel:9606601604" className="hover:text-amber-400 transition-colors text-sm block">
                      +91 96066 01604
                    </a>
                    <a href="tel:9535925954" className="hover:text-amber-400 transition-colors text-sm block">
                      +91 95359 25954
                    </a>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Mon-Sat: 9AM-6PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-amber-400 mt-1 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:thevedsgroup@gmail.com" 
                  className="hover:text-amber-400 transition-colors text-sm break-all"
                >
                  thevedsgroup@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-amber-400 mt-1 mr-3 flex-shrink-0" />
                <address className="text-sm not-italic">
                  <div className="mb-2">
                    <p className="font-semibold text-amber-400">Bengaluru:</p>
                    NO.1/1 Varadharajanna Building,<br />
                    Kodigehalli, Bengaluru – 560067
                  </div>
                  <div>
                    <p className="font-semibold text-amber-400">Chintamani:</p>
                    Shop 15, Jhansi field complex,<br />
                    Chintamani, 562125
                  </div>
                </address>
              </li>
            </ul>
          </div>
        </div>

      
      </div>

      
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} The VEDS. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;