import './App.css'
import { Timeline } from "./components/Timeline";
import { NavbarDemo } from "./components/Navbar.jsx";

function App() {

  return (
    <div>
      <NavbarDemo />
      <div className="pt-24">
        <Timeline />
      </div>
    </div>
  )
}


export default App
