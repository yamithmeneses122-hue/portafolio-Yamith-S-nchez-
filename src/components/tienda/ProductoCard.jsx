export default function ProductoCard({ producto, onAgregar, onMostrarDescripcion }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-red-600">
      <button
        type="button"
        onClick={() => onMostrarDescripcion(producto.id)}
        className="block w-full cursor-pointer overflow-hidden bg-black"
        aria-label={`Ver descripción de ${producto.nombre}`}
      >
        <img
          className="h-56 w-full object-cover transition duration-300 hover:scale-105"
          src={producto.imagen}
          alt={producto.nombre}
        />
      </button>

      <section className="p-5">
        <h3 className="text-xl font-bold text-white">{producto.nombre}</h3>

        {producto.mostrarDescripcion && (
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            {producto.descripcion}
          </p>
        )}

        <p className="mt-4 text-xl font-extrabold text-red-500">
          {producto.precioFormateado}
        </p>

        <button
          type="button"
          onClick={() => onAgregar(producto.id)}
          className="mt-4 w-full rounded-lg border border-red-600 bg-red-600 px-4 py-3 font-bold text-white transition duration-300 hover:bg-red-700"
        >
          Agregar al carrito
        </button>
      </section>
    </article>
  )
}
