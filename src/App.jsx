import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />  {/* <== AJOUT */}
        <Route path="/education" element={<Education />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
