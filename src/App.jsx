import './App.css'
import { Timeline } from "./components/Timeline";
import { NavbarDemo } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import {Hero} from "./components/Hero.jsx";

function App() {

  return (
    <div>
      <NavbarDemo />
      
      <div className="">
        <Hero />
        <Timeline />
        <Footer />
      </div>
    </div>
  )
}


export default App
