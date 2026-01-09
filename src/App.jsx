import './App.css'
import { Timeline } from "./components/Timeline";
import { NavbarDemo } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { AboutUs } from "./components/AboutUs.jsx";
import { Contact } from "./components/Contact.jsx";

function App() {

  return (
    <div>
      <NavbarDemo />
      
      <div className="[&>#aboutus]:scroll-mt-0 [&>#timeline]:scroll-mt-0 [&>#contact]:scroll-mt-0">
        <Hero />
        <AboutUs />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}


export default App
