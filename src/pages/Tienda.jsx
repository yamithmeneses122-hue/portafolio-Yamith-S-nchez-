import { useState } from "react"
import ProductoCard from "../components/ProductoCard"
import Carrito from "../components/Carrito"

const productos = [
  {
    id: 1,
    nombre: "Audífonos inalámbricos",
    descripcion: "Audífonos Bluetooth con cancelación de ruido y batería de larga duración.",
    precio: 120000,
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    nombre: "Teclado mecánico",
    descripcion: "Teclado mecánico compacto con iluminación RGB y switches mecánicos.",
    precio: 180000,
    imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    nombre: "Mouse inalámbrico",
    descripcion: "Mouse inalámbrico ergonómico con sensor de alta precisión.",
    precio: 90000,
    imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    nombre: "Monitor 27",
    descripcion: "Monitor de 27 pulgadas con resolución Quad HD y alta frecuencia de actualización.",
    precio: 950000,
    imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",
  },
]

export default function Tienda() {
  const [carrito, setCarrito] = useState([])
  const [carritoAbierto, setCarritoAbierto] = useState(false)
  const [descripciones, setDescripciones] = useState({})

  const formatearPrecio = (valor) => `$${valor.toLocaleString("es-CO")}`

  const agregarAlCarrito = (producto) => {
    setCarrito((actual) => {
      const existente = actual.find((item) => item.id === producto.id)

      if (existente) {
        return actual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      }

      return [...actual, { ...producto, cantidad: 1 }]
    })

    setCarritoAbierto(true)
  }

  const eliminarDelCarrito = (nombre) => {
    setCarrito((actual) => actual.filter((producto) => producto.nombre !== nombre))
  }

  const mostrarDescripcion = (id) => {
    setDescripciones((actual) => ({
      ...actual,
      [id]: !actual[id],
    }))
  }

  const comprar = () => {
    if (carrito.length === 0) return

    alert("Compra realizada correctamente.")
    setCarrito([])
    setCarritoAbierto(false)
  }

  const cantidadTotal = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  )

  return (
    <section id="tienda" className="scroll-mt-[100px] bg-black px-[8%] py-24 text-white">
      <header className="mb-12 flex items-center justify-between border-b border-neutral-800 pb-6">
        <section>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
            Tienda virtual
          </p>
          <h2 className="text-4xl font-extrabold">
            Mi <span className="text-red-600">tienda</span>
          </h2>
          <p className="mt-2 text-neutral-400">
            Productos tecnológicos con un diseño simple y moderno.
          </p>
        </section>

        <button
          type="button"
          onClick={() => setCarritoAbierto(true)}
          className="flex items-center gap-3 rounded-lg border border-red-600 bg-red-600 px-4 py-3 font-bold text-white transition hover:bg-white hover:text-black"
          aria-label="Abrir carrito"
        >
          🛒
          <span>Carrito</span>
          <span className="rounded-full bg-black px-2 py-1 text-xs text-white">
            {cantidadTotal}
          </span>
        </button>
      </header>

      <main className="grid grid-cols-3 gap-8 max-[900px]:grid-cols-2 max-[650px]:grid-cols-1">
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={{ ...producto, precio: formatearPrecio(producto.precio) }}
            onAgregar={() => agregarAlCarrito(producto)}
            onMostrarDescripcion={() => mostrarDescripcion(producto.id)}
            descripcionVisible={Boolean(descripciones[producto.id])}
          />
        ))}
      </main>

      <footer className="mt-16 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
        © 2026 Mi tienda. Todos los derechos reservados.
      </footer>

      <Carrito
        carrito={carrito}
        abierto={carritoAbierto}
        onCerrar={() => setCarritoAbierto(false)}
        onEliminar={eliminarDelCarrito}
        onComprar={comprar}
      />
    </section>
  )
}
