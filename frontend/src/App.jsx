jiimport { Routes, Route } from "react-router-dom";
import Navbar from "./componenets/nav.jsx";
import Footer from "./componenets/Footer.jsx";

import Home from "./pages/home";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Training from "./pages/Training.jsx";
import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Quote from "./pages/GetQuote.jsx";

function App() {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <div className="pt-16 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/training-internships" element={<Training />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default ;
