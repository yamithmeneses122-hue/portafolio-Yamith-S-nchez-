import Nav from "../components/Nav"
import Hero from "../components/Hero"
import SobreMi from "../components/SobreMi"
import Proyectos from "../components/Proyectos"
import Estudios from "../components/Estudios"
import "../styles/style.css"

export default function Portafolio() {
  return (
    <div className="body">
      <Nav />
      <Hero />
      <SobreMi />
      <Proyectos />
      <Estudios />
    </div>
  )
}
