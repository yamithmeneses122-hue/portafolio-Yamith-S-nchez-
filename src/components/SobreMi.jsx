export default function SobreMi() {
  const technologies = [
    ["https://es.legacy.reactjs.org/docs/getting-started.html","https://th.bing.com/th/id/OIP.y6C4nSvy2Woe0m7bWEn4BAHaD4?w=108&h=108&c=1&bgcl=1bf651&r=0&o=7&dpr=1.3&pid=ImgRC&rm=3","React"],
    ["https://www.python.org/","https://c0.klipartz.com/pngpicture/408/401/gratis-png-python-computer-icons-font-impresionante-tecnologia-puntos-circulares-material-flotante.png","Python"],
    ["https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content","https://icones.pro/wp-content/uploads/2021/05/icone-html-bleue.png","HTML"],
    ["https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content","https://tse4.mm.bing.net/th/id/OIP.tAvAD5lCtDJSjywplxd37QHaEo?rs=1&pid=ImgDetMain&o=7&rm=3","CSS"],
  ]

  return (
    <section id="sobremi" className="flex scroll-mt-[100px] flex-wrap gap-10 bg-white px-[8%] py-[90px] text-black">
      <article className="flex w-[45%] min-w-[280px] items-center justify-center max-[900px]:w-full">
        <img className="w-[90%] rounded-2xl border border-[#cfcfcf] grayscale contrast-110 shadow-[0_15px_40px_rgba(0,0,0,0.25)]" src="https://i.pinimg.com/736x/de/cb/32/decb32e4aca7b66cb3ba767764e1d27c.jpg" alt="" />
      </article>
      <article className="w-1/2 min-w-[280px] max-[900px]:w-full">
        <h1 className="mb-[25px] text-[2.6rem] font-extrabold">Sobre <span className="text-[#8a8a8a]">mi</span></h1>
        <p className="mb-[18px] leading-[1.7] text-[#3d3d3d]">
          Soy Jamil Sánchez Meneses, desarrollador de software enfocado en la creación de aplicaciones web y móviles modernas, funcionales y accesibles. Me apasiona la tecnología y el desarrollo de soluciones digitales que aporten valor y mejoren la experiencia de los usuarios. Me caracterizo por ser una persona responsable, creativa y con gran capacidad de aprendizaje, siempre dispuesto a enfrentar nuevos retos y a fortalecer mis habilidades técnicas y profesionales. Durante mi formación académica he participado en distintos proyectos enfocados en el desarrollo de aplicaciones, donde he aplicado conocimientos en diseño web, programación y desarrollo de interfaces intuitivas. Tengo experiencia trabajando con tecnologías como HTML, CSS, JavaScript y herramientas orientadas al desarrollo de software, lo que me ha permitido crear soluciones eficientes y adaptables a diferentes necesidades.
        </p>
        <p className="mb-[18px] leading-[1.7] text-[#3d3d3d]">
          Además, me interesa el desarrollo de aplicaciones accesibles e inclusivas, buscando que la tecnología sea una herramienta útil para todas las personas. Actualmente continúo ampliando mis conocimientos en desarrollo web y móvil, explorando nuevas tecnologías y metodologías de trabajo. Mi objetivo es crecer profesionalmente como desarrollador y contribuir en la creación de proyectos innovadores que generen impacto positivo en la sociedad.
        </p>
        <article className="mt-[15px] flex flex-wrap gap-[15px]">
          {technologies.map(([href,image,alt]) => (
            <a key={alt} href={href} target="_blank" rel="noreferrer" className="flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full border-2 border-[#0a0a0a] bg-[#0a0a0a] transition duration-300 hover:scale-[1.08] hover:bg-white">
              <img className="h-[26px] w-[26px] rounded-none object-contain grayscale brightness-[1.4] invert" src={image} alt={alt} />
            </a>
          ))}
        </article>
      </article>
    </section>
  )
}
