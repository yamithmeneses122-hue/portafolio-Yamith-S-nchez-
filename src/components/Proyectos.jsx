export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="proyectos"
      style={{ scrollMarginTop: "100px" }}
    >
      <article className="article-proyectos">
        <h1 className="proyectos-h1">
          Mis <span className="proyectos-h1-span">Proyectos</span>
        </h1>
      </article>

      <article className="article-proyectos-2">
        <section className="section-proyectos">
          <img
            className="img-signa-tech"
            src="/img/WhatsApp Image 2026-04-16 at 12.44.47 AM.jpeg"
            alt="SIGNA-TECH-APP"
          />
        </section>

        <section className="article-proyectos-section">
          <h2>SIGNA-TECH-APP</h2>
          <p>
            SIGNA-TECH APP es un proyecto enfocado en la inclusión y
            accesibilidad, diseñado para mejorar la comunicación entre
            personas con discapacidad auditiva y la sociedad. Esta
            aplicación busca ofrecer una solución tecnológica que permita
            facilitar la interacción mediante herramientas digitales
            modernas, accesibles y fáciles de usar. El objetivo principal
            del proyecto es reducir las barreras de comunicación y promover
            la inclusión a través de la tecnología. Durante el desarrollo de
            SIGNA-TECH APP se implementaron diferentes funcionalidades
            orientadas a mejorar la experiencia del usuario, como interfaces
            intuitivas, diseño accesible y navegación sencilla. El proyecto
            también contempla la posibilidad de integrar herramientas de
            interpretación, comunicación visual y asistencia digital,
            permitiendo una interacción más efectiva entre usuarios. Además,
            se trabajó en la optimización del diseño para garantizar que la
            aplicación sea adaptable a diferentes dispositivos, tanto web
            como móviles. Este proyecto me permitió fortalecer habilidades
            en desarrollo frontend, diseño de interfaces y estructuración de
            aplicaciones. Para su desarrollo se utilizaron tecnologías como
            HTML, CSS, JavaScript y herramientas de programación enfocadas
            en la construcción de soluciones digitales modernas. SIGNA-TECH
            APP representa una iniciativa innovadora con impacto social,
            demostrando cómo la tecnología puede ser utilizada para mejorar
            la comunicación y promover la inclusión digital
          </p>
          <br />

          <button className="bt2">
            <a
              href="https://www.figma.com/make/JRtAVaGJraFJZ7WVgn7jLv/High-Fidelity-Web-App-UI?p=f&fullscreen=1&preview-route=%2Flogin"
              target="_blank"
              rel="noreferrer"
            >
              Figma
            </a>
          </button>

          <button className="bt2">
            <a
              href="https://yamithmeneses122.atlassian.net/?continue=https%3A%2F%2Fyamithmeneses122.atlassian.net%2Fwelcome%2Fsoftware%3FprojectId%3D10000&atlOrigin=eyJpIjoiZmIwODllNTZjOTFhNDJjMzk0YWEzZGRhNTY3ZDM0NTMiLCJwIjoiamlyYS1zb2Z0d2FyZSJ9"
              target="_blank"
              rel="noreferrer"
            >
              Jira
            </a>
          </button>
        </section>
      </article>
    </section>
  )
}
