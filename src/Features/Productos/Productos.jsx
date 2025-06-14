import { useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import { ProductoCard } from "./ProductoCard";

export function Productos() {
  const { productos, loading, error } = useContext(ProductContext);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="Productos" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">
          Nuestros Productos
        </h2>
        <div className="row g-4">
          {productos.slice(0,5).map((producto) => (
            <ProductoCard
              key={producto.id}
              imagen={producto.image}
              titulo={producto.title}
              descripcion={producto.description}
              precio={producto.price}
              alt={producto.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
