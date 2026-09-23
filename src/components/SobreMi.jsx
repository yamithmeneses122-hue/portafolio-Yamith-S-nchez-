export default function SobreMi() {
  return (
    <section
      id="sobremi"
      className="Sobre-mi"
      style={{ scrollMarginTop: "100px" }}
    >
      <article className="sobremi-article">
        <img
          className="sobremi-article-img-"
          src="https://i.pinimg.com/736x/de/cb/32/decb32e4aca7b66cb3ba767764e1d27c.jpg"
          alt=""
        />
      </article>

      <article className="sobremi-article-sobremi">
        <h1 className="sobre">
          Sobre <span className="mi">mi</span>
        </h1>

        <p>
          Soy Jamil Sánchez Meneses, desarrollador de software enfocado en la
          creación de aplicaciones web y móviles modernas, funcionales y
          accesibles. Me apasiona la tecnología y el desarrollo de soluciones
          digitales que aporten valor y mejoren la experiencia de los
          usuarios. Me caracterizo por ser una persona responsable, creativa
          y con gran capacidad de aprendizaje, siempre dispuesto a enfrentar
          nuevos retos y a fortalecer mis habilidades técnicas y
          profesionales. Durante mi formación académica he participado en
          distintos proyectos enfocados en el desarrollo de aplicaciones,
          donde he aplicado conocimientos en diseño web, programación y
          desarrollo de interfaces intuitivas. Tengo experiencia trabajando
          con tecnologías como HTML, CSS, JavaScript y herramientas
          orientadas al desarrollo de software, lo que me ha permitido crear
          soluciones eficientes y adaptables a diferentes necesidades.
        </p>

        <br />
        <br />

        <p>
          Además, me interesa el desarrollo de aplicaciones accesibles e
          inclusivas, buscando que la tecnología sea una herramienta útil
          para todas las personas. Actualmente continúo ampliando mis
          conocimientos en desarrollo web y móvil, explorando nuevas
          tecnologías y metodologías de trabajo. Mi objetivo es crecer
          profesionalmente como desarrollador y contribuir en la creación de
          proyectos innovadores que generen impacto positivo en la sociedad.
        </p>

        <br />
        <br />

        <article className="sobremi-article-sobremi-tecnologias">
          <button className="React">
            <a
              href="https://es.legacy.reactjs.org/docs/getting-started.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://th.bing.com/th/id/OIP.y6C4nSvy2Woe0m7bWEn4BAHaD4?w=108&h=108&c=1&bgcl=1bf651&r=0&o=7&dpr=1.3&pid=ImgRC&rm=3"
                alt="React"
              />
            </a>
          </button>

          <button className="Python">
            <a href="https://www.python.org/" target="_blank" rel="noreferrer">
              <img
                src="https://c0.klipartz.com/pngpicture/408/401/gratis-png-python-computer-icons-font-impresionante-tecnologia-puntos-circulares-material-flotante.png"
                alt="Python"
              />
            </a>
          </button>

          <button className="HTML">
            <a
              href="https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://icones.pro/wp-content/uploads/2021/05/icone-html-bleue.png"
                alt="HTML"
              />
            </a>
          </button>

          <button className="whatsapp">
            <a
              href="https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.tAvAD5lCtDJSjywplxd37QHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="CSS"
              />
            </a>
          </button>
        </article>
      </article>
    </section>
  )
}
