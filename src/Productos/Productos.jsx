import { ProductoCard } from './ProductoCard';

export function Productos() {
  const productos = [
    {
      imagen: "productos/camisa-retro.webp",
      titulo: "Camiseta Futbol Retro",
      descripcion: "Diseño clásico de tus equipos favoritos.",
      precio: "250.000",
      alt: "Camiseta Futbol",
    },
    {
      imagen: "productos/botella.jpeg",
      titulo: "Botella Deportiva",
      descripcion: "Mantente hidratado con estilo.",
      precio: "65.000",
      alt: "Botella Deportiva",
    },
    {
      imagen: "productos/llavero.webp",
      titulo: "Llavero Balón",
      descripcion: "Perfecto para fans y coleccionistas.",
      precio: "25.000",
      alt: "Llavero balón",
    },
    {
      imagen: "productos/camisa.jpg",
      titulo: "Camisa de Hincha",
      descripcion: "Demuestra tu pasión en cada salida.",
      precio: "450.000",
      alt: "Camisa del equipo",
    },
  ];

  return (
    <section id="Productos" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">Nuestros Productos</h2>
        <div className="row g-4">
          {productos.map((prod, index) => (
            <ProductoCard
              key={index}
              imagen={prod.imagen}
              titulo={prod.titulo}
              descripcion={prod.descripcion}
              precio={prod.precio}
              alt={prod.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
