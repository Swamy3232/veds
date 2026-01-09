import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image/Logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Training & Internships", path: "/training-internships" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-xl py-0"
          : "bg-gradient-to-b from-amber-50/95 to-white py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with construction-themed styling */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-amber-100 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={logo}
                alt="VEDS Civil Engineering"
                className="h-20 w-auto object-contain relative z-10"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 hidden sm:block tracking-tight">
                THE VEDS
              </span>
              <span className="text-xs text-amber-700 font-medium hidden sm:block tracking-wider">
                Building Excellence Since 1995
              </span>
            </div>
          </Link>

          {/* Desktop Menu with construction theme */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`font-semibold px-1 transition-all duration-200 ${
                    location.pathname === link.path
                      ? "text-amber-700 border-b-2 border-amber-600"
                      : "text-gray-800 hover:text-amber-700"
                  }`}
                >
                  {link.name}
                </Link>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}

            {/* CTA Button with construction style */}
            <div className="ml-4 relative group">
              <div className="absolute -inset-1 bg-amber-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link
                to="/quote"
                className="relative bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-lg hover:shadow-amber-200 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                GET QUOTE
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button with construction style */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors duration-200"
              aria-label="Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-amber-700 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-amber-700 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-amber-700 transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with construction theme */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-white to-amber-50/95 shadow-2xl border-t border-amber-100 animate-slideDown">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-amber-100 text-amber-800 border-l-4 border-amber-600"
                    : "text-gray-800 hover:bg-amber-50 hover:pl-6"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-amber-100">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3.5 rounded-lg font-bold hover:shadow-lg hover:shadow-amber-200 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  GET QUOTE
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Add custom animation to global.css or Tailwind config */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;