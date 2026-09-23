export default function Carrito({ abierto, carrito, total, cantidad, onCerrar, onEliminar }) {
  return (
    <aside
      className={`fixed inset-y-0 right-0 z-[1100] w-full max-w-md border-l border-zinc-800 bg-black p-6 shadow-2xl transition-transform duration-300 ${abierto ? "translate-x-0" : "translate-x-full"}`}
      aria-labelledby="titulo-carrito"
      aria-hidden={!abierto}
    >
      <header className="flex items-center justify-between border-b border-zinc-800 pb-5">
        <section>
          <h2 id="titulo-carrito" className="text-2xl font-extrabold text-white">
            Carrito
          </h2>
          <p className="text-sm text-zinc-500">{cantidad} producto(s)</p>
        </section>

        <button
          type="button"
          onClick={onCerrar}
          className="text-3xl leading-none text-zinc-400 transition hover:text-red-500"
          aria-label="Cerrar carrito"
        >
          ×
        </button>
      </header>

      <ul className="flex max-h-[calc(100vh-260px)] flex-col gap-4 overflow-y-auto py-6">
        {carrito.length === 0 ? (
          <li className="py-10 text-center text-zinc-500">
            Tu carrito está vacío.
          </li>
        ) : (
          carrito.map((producto) => (
            <li
              key={producto.id}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-zinc-800 pb-4"
            >
              <section>
                <p className="font-semibold text-white">{producto.nombre}</p>
                <span className="text-sm text-zinc-500">
                  Cantidad: {producto.cantidad}
                </span>
              </section>

              <span className="font-bold text-red-500">
                {producto.subtotalFormateado}
              </span>

              <button
                type="button"
                onClick={() => onEliminar(producto.id)}
                className="text-sm font-semibold text-zinc-500 transition hover:text-red-500"
              >
                Eliminar
              </button>
            </li>
          ))
        )}
      </ul>

      <footer className="absolute bottom-6 left-6 right-6 border-t border-zinc-800 pt-5">
        <p className="mb-4 flex items-center justify-between text-zinc-400">
          <span>Total</span>
          <strong className="text-xl text-white">{total}</strong>
        </p>

        <button
          type="button"
          disabled={carrito.length === 0}
          className="w-full rounded-lg bg-red-600 px-4 py-3 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-500"
        >
          Comprar
        </button>
      </footer>
    </aside>
  )
}
