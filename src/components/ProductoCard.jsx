export default function ProductoCard({ producto, onAgregar, onMostrarDescripcion, descripcionVisible }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-red-600">
      <button
        type="button"
        onClick={onMostrarDescripcion}
        className="block w-full cursor-pointer bg-black p-0"
        aria-label={`Ver descripción de ${producto.nombre}`}
      >
        <img
          className="block h-60 w-full object-cover transition duration-300 hover:scale-[1.03]"
          src={producto.imagen}
          alt={producto.nombre}
        />
      </button>

      <header className="px-5 pt-5">
        <h3 className="text-xl font-bold text-white">{producto.nombre}</h3>
      </header>

      {descripcionVisible && (
        <p className="px-5 pt-2 text-sm leading-6 text-neutral-400">
          {producto.descripcion}
        </p>
      )}

      <p className="px-5 py-4 text-lg font-extrabold text-red-500">
        {producto.precio}
      </p>

      <button
        type="button"
        onClick={onAgregar}
        className="mx-5 mb-5 w-[calc(100%-2.5rem)] rounded-lg border border-red-600 bg-red-600 px-4 py-3 font-bold text-white transition duration-300 hover:bg-white hover:text-black"
      >
        Agregar al carrito
      </button>
    </article>
  )
}
