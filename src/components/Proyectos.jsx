export default function Proyectos() {
  return (
    <section id="proyectos" className="scroll-mt-[100px] bg-[#0a0a0a] px-[8%] py-[90px] text-white">
      <article className="mb-10 text-center">
        <h1 className="text-[2.4rem] font-extrabold">Mis <span className="text-[#8a8a8a]">Proyectos</span></h1>
      </article>
      <article className="flex flex-wrap items-center gap-10">
        <section className="flex min-w-[280px] flex-1 items-center">
          <img className="w-full rounded-[14px] border border-[#3d3d3d] grayscale contrast-110 shadow-[0_15px_40px_rgba(255,255,255,0.1)]" src="/img/WhatsApp Image 2026-04-16 at 12.44.47 AM.jpeg" alt="SIGNA-TECH-APP" />
        </section>
        <section className="min-w-[280px] flex-1">
          <h2 className="mb-[15px] text-[1.6rem] text-white">SIGNA-TECH-APP</h2>
          <p className="mb-[15px] leading-[1.7] text-[#cfcfcf]">
            SIGNA-TECH APP es un proyecto enfocado en la inclusión y accesibilidad, diseñado para mejorar la comunicación entre personas con discapacidad auditiva y la sociedad. Esta aplicación busca ofrecer una solución tecnológica que permita facilitar la interacción mediante herramientas digitales modernas, accesibles y fáciles de usar. El objetivo principal del proyecto es reducir las barreras de comunicación y promover la inclusión a través de la tecnología. Durante el desarrollo de SIGNA-TECH APP se implementaron diferentes funcionalidades orientadas a mejorar la experiencia del usuario, como interfaces intuitivas, diseño accesible y navegación sencilla. El proyecto también contempla la posibilidad de integrar herramientas de interpretación, comunicación visual y asistencia digital, permitiendo una interacción más efectiva entre usuarios. Además, se trabajó en la optimización del diseño para garantizar que la aplicación sea adaptable a diferentes dispositivos, tanto web como móviles. Este proyecto me permitió fortalecer habilidades en desarrollo frontend, diseño de interfaces y estructuración de aplicaciones. Para su desarrollo se utilizaron tecnologías como HTML, CSS, JavaScript y herramientas de programación enfocadas en la construcción de soluciones digitales modernas. SIGNA-TECH APP representa una iniciativa innovadora con impacto social, demostrando cómo la tecnología puede ser utilizada para mejorar la comunicación y promover la inclusión digital
          </p>
          <a className="mr-3 mt-[10px] inline-block rounded-lg border-2 border-white bg-white px-[22px] py-[10px] font-semibold text-[#0a0a0a] transition duration-300 hover:bg-[#0a0a0a] hover:text-white" href="https://www.figma.com/make/JRtAVaGJraFJZ7WVgn7jLv/High-Fidelity-Web-App-UI?p=f&fullscreen=1&preview-route=%2Flogin" target="_blank" rel="noreferrer">Figma</a>
          <a className="mr-3 mt-[10px] inline-block rounded-lg border-2 border-white bg-white px-[22px] py-[10px] font-semibold text-[#0a0a0a] transition duration-300 hover:bg-[#0a0a0a] hover:text-white" href="https://yamithmeneses122.atlassian.net/?continue=https%3A%2F%2Fyamithmeneses122.atlassian.net%2Fwelcome%2Fsoftware%3FprojectId%3D10000&atlOrigin=eyJpIjoiZmIwODllNTZjOTFhNDJjMzk0YWEzZGRhNTY3ZDM0NTMiLCJwIjoiamlyYS1zb2Z0d2FyZSJ9" target="_blank" rel="noreferrer">Jira</a>
        </section>
      </article>
    </section>
  )
}
