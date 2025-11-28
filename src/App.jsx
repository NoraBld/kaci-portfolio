import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Projects from "./pages/Projects";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />  {/* <== AJOUT */}
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
