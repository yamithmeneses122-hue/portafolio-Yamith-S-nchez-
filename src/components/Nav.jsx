export default function Nav() {
  const links = [
    ["Inicio", "#"],
    ["Sobre mi", "#sobremi"],
    ["Proyectos", "#proyectos"],
    ["Estudios", "#estudios"],
    ["Tienda", "#tienda"],
  ]

  return (
    <header className="fixed top-0 z-[999] flex min-h-[85px] w-full items-center justify-between border-b border-[#3d3d3d] bg-[#0a0a0a] px-[8%] py-[22px] max-[600px]:flex-col max-[600px]:gap-[10px] max-[600px]:px-[5%] max-[600px]:py-[15px]">
      <h1 className="text-[1.6rem] font-bold tracking-[1px] text-white">
        Porta<span className="text-[#8a8a8a]">folio Y</span>S
      </h1>
      <nav>
        <ul className="flex list-none gap-[10px] max-[900px]:flex-wrap max-[900px]:justify-center max-[900px]:gap-[2px]">
          {links.map(([label, href]) => (
            <li key={label}>
              <a
                className="rounded-[30px] px-4 py-[10px] text-[0.95rem] font-medium text-white no-underline transition duration-300 hover:bg-white hover:text-[#0a0a0a] max-[900px]:px-[10px] max-[900px]:py-2 max-[900px]:text-[0.85rem]"
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
