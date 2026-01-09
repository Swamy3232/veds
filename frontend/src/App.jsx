import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Navbar from "./componenets/nav.jsx";
// import Home from "./pages/Home";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
