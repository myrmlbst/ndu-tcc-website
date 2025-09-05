import './App.css'
import { Timeline } from "./components/Timeline";
import { NavbarDemo } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {

  return (
    <div>
      <NavbarDemo />
      <div className="pt-24">
        <Timeline />
        <Footer />
      </div>
    </div>
  )
}


export default App
