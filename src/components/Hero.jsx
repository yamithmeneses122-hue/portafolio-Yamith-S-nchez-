export default function Hero() {
  const socials = [
    ["https://www.facebook.com/","https://as2.ftcdn.net/v2/jpg/03/50/73/81/1000_F_350738136_YIgEtCfaDlhRTF1RfNK7Ff2PbkR4HEYf.jpg","Facebook"],
    ["https://www.instagram.com/","https://thumbs.dreamstime.com/b/nuevo-icono-del-logotipo-de-la-c%C3%A1mara-instagram-en-vector-azul-con-los-ejemplos-modernos-dise%C3%B1o-pendiente-el-fond-moderna-azules-138902744.jpg","Instagram"],
    ["https://www.tiktok.com/explore","https://cdn-icons-png.flaticon.com/512/3046/3046113.png","TikTok"],
    ["https://wa.me/573127567859","https://thumbs.dreamstime.com/b/whatsapp-icon-logo-element-sign-vector-blue-mobile-app-white-background-whatsapp-icon-logo-element-sign-vector-mobile-app-139246537.jpg","WhatsApp"],
  ]

  return (
    <section className="flex min-h-screen w-full flex-wrap items-center gap-10 bg-gradient-to-b from-[#0a0a0a] to-[#161616] px-[8%] pb-[5%] pt-[140px] text-white max-[900px]:flex-col-reverse max-[900px]:text-center max-[600px]:pt-[160px]">
      <article className="w-1/2 min-w-[300px] rounded-[18px] border border-[#3d3d3d] p-[30px] shadow-[0_0_40px_rgba(255,255,255,0.06)] max-[900px]:w-full">
        <h1 className="mb-[15px] text-[1.6rem] font-light">Hola,<span className="ml-2 font-bold">Yo soy</span></h1>
        <h1 className="mb-5 text-5xl font-extrabold max-[600px]:text-[2rem]">Yamith Sanchez</h1>
        <h1 className="mb-5 text-[1.4rem] font-normal text-[#cfcfcf] max-[600px]:text-[1.1rem]"><span className="font-bold text-white">Un</span> desarrollador web y movil</h1>
        <p className="text-[0.98rem] leading-[1.7] text-[#cfcfcf]">
          enfocado en la creación de aplicaciones web y móviles modernas, funcionales y accesibles. Me apasiona la tecnología y el desarrollo de soluciones digitales que aporten valor y mejoren la experiencia de los usuarios. Me caracterizo por ser una persona responsable, creativa y con gran capacidad de aprendizaje, siempre dispuesto a enfrentar nuevos retos y a fortalecer mis habilidades técnicas y profesionales. Durante mi formación académica he participado en distintos proyectos enfocados en el desarrollo de aplicaciones, donde he aplicado conocimientos en diseño web, programación y desarrollo de interfaces intuitivas. Tengo experiencia trabajando con tecnologías como HTML, CSS, JavaScript y herramientas orientadas al desarrollo de software, lo que me ha permitido crear soluciones eficientes y adaptables a diferentes necesidades. Además, me interesa el desarrollo de aplicaciones accesibles e inclusivas, buscando que la tecnología sea una herramienta útil para todas las personas. Actualmente continúo ampliando mis conocimientos en desarrollo web y móvil, explorando nuevas tecnologías y metodologías de trabajo. Mi objetivo es crecer profesionalmente como desarrollador y contribuir en la creación de proyectos innovadores que generen impacto positivo en la sociedad
        </p>
        <article className="mt-[35px] flex gap-[15px] max-[900px]:justify-center">
          {socials.map(([href, image, alt]) => (
            <a key={alt} href={href} target="_blank" rel="noreferrer" className="flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white transition duration-300 hover:scale-[1.08] hover:bg-black">
              <img className="h-[22px] w-[22px] rounded-none object-cover grayscale brightness-[1.3] invert" src={image} alt={alt} />
            </a>
          ))}
        </article>
      </article>
      <article className="mx-auto w-[40%] min-w-[260px] text-center max-[900px]:w-[60%] max-[600px]:w-[75%]">
        <img className="mx-auto block aspect-square w-[65%] rounded-full border-[3px] border-white object-cover grayscale contrast-110 shadow-[0_0_50px_rgba(255,255,255,0.15)]" src="https://i.pinimg.com/736x/e5/3b/05/e53b058d58e9b4abad4b01c65e229991.jpg" alt="imagen mia" />
      </article>
    </section>
  )
}
