export default function Hero() {
  return (
    <section className="sectio1-img">
      <article className="article-section-img">
        <h1 className="h2-section-img">
          Hola,<span className="espan-presentacion">Yo soy</span>
        </h1>

        <h1 className="nombre">Yamith Sanchez</h1>

        <h1 className="desarrollador">
          <span className="un">Un</span> desarrollador web y movil
        </h1>

        <p>
          enfocado en la creación de aplicaciones web y móviles modernas,
          funcionales y accesibles. Me apasiona la tecnología y el desarrollo
          de soluciones digitales que aporten valor y mejoren la experiencia
          de los usuarios. Me caracterizo por ser una persona responsable,
          creativa y con gran capacidad de aprendizaje, siempre dispuesto a
          enfrentar nuevos retos y a fortalecer mis habilidades técnicas y
          profesionales. Durante mi formación académica he participado en
          distintos proyectos enfocados en el desarrollo de aplicaciones,
          donde he aplicado conocimientos en diseño web, programación y
          desarrollo de interfaces intuitivas. Tengo experiencia trabajando
          con tecnologías como HTML, CSS, JavaScript y herramientas
          orientadas al desarrollo de software, lo que me ha permitido crear
          soluciones eficientes y adaptables a diferentes necesidades.
          Además, me interesa el desarrollo de aplicaciones accesibles e
          inclusivas, buscando que la tecnología sea una herramienta útil
          para todas las personas. Actualmente continúo ampliando mis
          conocimientos en desarrollo web y móvil, explorando nuevas
          tecnologías y metodologías de trabajo. Mi objetivo es crecer
          profesionalmente como desarrollador y contribuir en la creación de
          proyectos innovadores que generen impacto positivo en la sociedad
        </p>

        <article className="sectio1-img-article-botones">
          <button className="Facebook">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img
                src="https://as2.ftcdn.net/v2/jpg/03/50/73/81/1000_F_350738136_YIgEtCfaDlhRTF1RfNK7Ff2PbkR4HEYf.jpg"
                alt="Facebook"
              />
            </a>
          </button>

          <button className="instagram">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img
                src="https://thumbs.dreamstime.com/b/nuevo-icono-del-logotipo-de-la-c%C3%A1mara-instagram-en-vector-azul-con-los-ejemplos-modernos-dise%C3%B1o-pendiente-el-fond-moderna-azules-138902744.jpg"
                alt="Instagram"
              />
            </a>
          </button>

          <button className="tiktok">
            <a href="https://www.tiktok.com/explore" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3046/3046113.png"
                alt="TikTok"
              />
            </a>
          </button>

          <button className="whatsapp">
            <a href="https://wa.me/573127567859" target="_blank" rel="noreferrer">
              <img
                src="https://thumbs.dreamstime.com/b/whatsapp-icon-logo-element-sign-vector-blue-mobile-app-white-background-whatsapp-icon-logo-element-sign-vector-mobile-app-139246537.jpg"
                alt="WhatsApp"
              />
            </a>
          </button>
        </article>
      </article>

      <article className="article-section-img-foto">
        <img
          className="img"
          src="https://i.pinimg.com/736x/e5/3b/05/e53b058d58e9b4abad4b01c65e229991.jpg"
          alt="imagen mia"
        />
      </article>
    </section>
  )
}
