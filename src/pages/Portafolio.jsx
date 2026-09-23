import Nav from "../components/Nav"
import Hero from "../components/Hero"
import SobreMi from "../components/SobreMi"
import Proyectos from "../components/Proyectos"
import Estudios from "../components/Estudios"

export default function Portafolio() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-poppins text-black">
      <Nav />
      <Hero />
      <SobreMi />
      <Proyectos />
      <Estudios />
    </main>
  )
}
