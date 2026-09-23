export default function Carrito({ carrito, abierto, onCerrar, onEliminar, onComprar }) {
  const total = carrito.reduce(
    (acumulado, producto) => acumulado + producto.precio * producto.cantidad,
    0
  )

  const cantidad = carrito.reduce(
    (acumulado, producto) => acumulado + producto.cantidad,
    0
  )

  const formatearPrecio = (valor) =>
    `$${valor.toLocaleString("es-CO")}`

  return (
    <>
      {abierto && (
        <aside className="fixed inset-0 z-[1000] bg-black/60" aria-label="Fondo del carrito">
          <button
            type="button"
            onClick={onCerrar}
            className="absolute inset-0 h-full w-full cursor-default"
            aria-label="Cerrar carrito"
          />
          <section className="absolute right-0 top-0 flex h-full w-[380px] max-w-full flex-col border-l border-neutral-800 bg-neutral-950 p-8 shadow-2xl max-[650px]:w-full">
            <header className="flex items-center justify-between border-b border-neutral-800 pb-6">
              <h2 className="text-2xl font-bold text-white">Carrito</h2>
              <button
                type="button"
                onClick={onCerrar}
                className="text-3xl leading-none text-neutral-400 transition hover:text-red-500"
                aria-label="Cerrar carrito"
              >
                ×
              </button>
            </header>

            <ul className="flex flex-1 flex-col gap-4 overflow-y-auto py-6">
              {carrito.length === 0 ? (
                <li className="text-center text-neutral-500">Tu carrito está vacío.</li>
              ) : (
                carrito.map((producto) => (
                  <li
                    key={producto.nombre}
                    className="grid grid-cols-[1fr_auto] gap-3 border-b border-neutral-800 pb-4"
                  >
                    <section>
                      <h3 className="font-semibold text-white">{producto.nombre}</h3>
                      <p className="text-sm text-neutral-400">
                        {producto.cantidad} x {formatearPrecio(producto.precio)}
                      </p>
                    </section>

                    <section className="text-right">
                      <p className="font-bold text-red-500">
                        {formatearPrecio(producto.precio * producto.cantidad)}
                      </p>
                      <button
                        type="button"
                        onClick={() => onEliminar(producto.nombre)}
                        className="mt-1 text-sm text-neutral-500 transition hover:text-red-500"
                      >
                        Eliminar
                      </button>
                    </section>
                  </li>
                ))
              )}
            </ul>

            <footer className="border-t border-neutral-800 pt-6">
              <p className="mb-4 flex justify-between text-neutral-400">
                <span>Total ({cantidad})</span>
                <strong className="text-xl text-white">{formatearPrecio(total)}</strong>
              </p>
              <button
                type="button"
                onClick={onComprar}
                disabled={carrito.length === 0}
                className="w-full rounded-lg border border-red-600 bg-red-600 px-4 py-3 font-bold text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:border-neutral-800 disabled:bg-neutral-800 disabled:text-neutral-500"
              >
                Comprar
              </button>
            </footer>
          </section>
        </aside>
      )}
    </>
  )
}
