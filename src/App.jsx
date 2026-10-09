import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import TechCarousel from "./components/carosole"
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactSection from "./components/contactSection/contactSection"
import WhatsAppChat from "./components/cahtbot/chat";
import Blog from "./pages/blog"

function App() {
  return (
    <div className="min-h-screen bg-[#13160b] text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Services/>
      <TechCarousel/>
      <CaseStudies/>
      <Testimonials/>
      <Blog/>
      <ContactSection/>
      <WhatsAppChat/>
    </div>
  );
}

export default App;