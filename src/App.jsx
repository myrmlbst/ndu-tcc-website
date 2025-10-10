import './App.css'
import { Timeline } from "./components/Timeline";
import { NavbarDemo } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { AboutUs } from "./components/AboutUs.jsx";

function App() {

  return (
    <div>
      <NavbarDemo />
      
      <div>
        <Hero />
        <AboutUs />
        <Timeline />
        <Footer />
      </div>
    </div>
  )
}


export default App
