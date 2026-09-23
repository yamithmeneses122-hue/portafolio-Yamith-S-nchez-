export default function CabeceraTienda({ cantidad, onAbrirCarrito }) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-800 bg-black/95 px-[5%] py-5 backdrop-blur">
      <h2 className="text-2xl font-extrabold text-white">
        Mi <span className="text-red-500">tienda</span>
      </h2>

      <button
        type="button"
        onClick={onAbrirCarrito}
        className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 font-semibold text-white transition hover:border-red-600 hover:text-red-500"
        aria-label="Abrir carrito"
      >
        <span aria-hidden="true">🛒</span>
        <span>Carrito</span>
        <span className="flex min-w-6 items-center justify-center rounded-full bg-red-600 px-1.5 py-0.5 text-xs font-bold text-white">
          {cantidad}
        </span>
      </button>
    </header>
  )
}
