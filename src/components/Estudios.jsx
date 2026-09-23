export default function Estudios() {
  const estudios = [
    ["Tcnico en sistemas","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore sapiente, ipsum accusantium ducimus reprehenderit vel autem, quod quos ipsam quae quasi pariatur aliquid corporis culpa magni quisquam. Fugit autem dolorum cupiditate molestiae maxime, hic culpa? Atque ex velit, amet, voluptas, doloremque commodi earum beatae cum nisi nulla blanditiis illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vero fugit repudiandae assumenda et porro suscipit consequatur, ut adipisci asperiores pariatur amet quidem aspernatur modi, atque itaque reiciendis eligendi cupiditate."],
    ["Diseño 3D y Robotica","Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt in ducimus alias a facilis dolores sed, soluta vel ipsa voluptate nemo maiores adipisci explicabo quam ea amet quod magnam nihil perferendis velit? Consequatur totam obcaecati dicta ipsam esse quae cum reprehenderit, ea ut quasi neque quidem incidunt harum enim hic dolores ducimus eos praesentium perferendis vel quos fuga? Voluptates repellat aliquam quasi soluta vitae minima enim, pariatur impedit necessitatibus facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, minima ipsa totam maxime voluptate fuga magnam. A minus et, autem non veritatis, nam consequuntur inventore hic, quis cumque ab. Atque?"],
    ["Bachiller","Lorborum quod conseqecessitatibus molestiae, fuga enim porro explicabo, illo hic sint vel accusamus voluptatem perspiciatis id! Velit, odio aliquid voluptas deleniti magnam error vitae blanditiis placeat voluptatum architecto nihil illum pariatur aliquam, nisi, debitis quae facere praesentium labore exercitationem dolores quibusdam quas? Blanditiis, omnis. Reprehenderit culpa quo magnam ratione, accusamus provident odio laborum illo voluptate, quidem, voluptatibus earum quis. Illum accusamus possimus ullam, pariatur nam dolor.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptatibus repellendus praesentium provident deleniti, fugit commodi ducimus pariatur quae quis totam cumque voluptatem quaerat assumenda itaque adipisci temporibus mollitia corrupti?"]
  ]

  return (
    <section id="estudios" className="scroll-mt-[100px] bg-white px-[8%] py-[90px] text-black">
      <h1 className="pb-[50px] text-center text-[2.4rem] font-extrabold">Estu<span className="text-[#8a8a8a]">dios</span></h1>
      <main className="flex flex-wrap justify-center gap-[25px] text-white max-[900px]:flex-col max-[900px]:items-center">
        {estudios.map(([title,text]) => (
          <section key={title} className="flex min-h-[480px] min-w-[280px] max-w-[380px] flex-1 flex-col overflow-hidden rounded-2xl bg-[linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.75)),url(https://cdn.pixabay.com/photo/2023/06/23/02/00/robotics-8082570_1280.png)] bg-cover bg-center pb-[30px] grayscale shadow-[0_15px_35px_rgba(0,0,0,0.3)] max-[900px]:w-full max-[900px]:max-w-[420px]">
            <h3 className="bg-[#0a0a0a] px-[10px] py-[14px] text-center text-[1.3rem] font-semibold">{title}</h3>
            <p className="mt-[15px] flex-grow px-5 text-[0.92rem] leading-[1.6] text-[#cfcfcf]">{text}</p>
            <a className="mx-auto mt-5 block w-[85%] rounded-lg border-2 border-white bg-white p-[12px] text-center text-[0.85rem] font-semibold text-[#0a0a0a] no-underline transition duration-300 hover:bg-[#0a0a0a] hover:text-white" href="/descargar_proyectos/11-5. certificaciones academicas Hermes Sanchez.pdf" target="_blank" rel="noreferrer">Descargar.certificado.pdf</a>
          </section>
        ))}
      </main>
    </section>
  )
}
