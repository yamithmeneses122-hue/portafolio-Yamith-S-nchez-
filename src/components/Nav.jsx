export default function Nav() {
  return (
    <section className="section-body">
      <h1 className="portafolio">
        Porta<span className="span-portafolio">folio Y</span>S
      </h1>

      <nav className="nav-sectio-body">
        <ul className="ul-nav">
          <li>
            <a className="nav-inicio" href="#">
              Inicio
            </a>
          </li>
          <li>
            <a className="nav-a" href="#sobremi">
              Sobre mi
            </a>
          </li>
          <li>
            <a className="nav-a" href="#proyectos">
              Proyectos
            </a>
          </li>
          <li>
            <a className="nav-a" href="#estudios">
              Estudios
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
