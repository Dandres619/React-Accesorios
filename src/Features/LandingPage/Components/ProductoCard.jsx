import { useState, useContext } from "react";
import { CarritoContext } from "../../Carrito/Components/Carrito";

export function ProductoCard({ imagen, titulo, descripcion, precio, alt }) {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const { agregarAlCarrito } = useContext(CarritoContext);

  const aumentarContador = () =>
    setContador((prev) => (prev === 10 ? 10 : prev + 1));
  const reducirContador = () =>
    setContador((prev) => (prev > 0 ? prev - 1 : 0));

  const handleAgregar = () => {
    if (contador > 0) {
      agregarAlCarrito({
        titulo,
        precio,
        cantidad: contador,
        imagen,
      });
      setContador(0);
      setMensaje("¡Agregado con éxito!");
      setTimeout(() => setMensaje(""), 1500);
    }
  };

  return (
    <div className="col-md-6 col-lg-3">
      <div className="card h-100 shadow-sm producto-card">
        <img
          src={imagen}
          className="card-img-top object-fit-cover"
          alt={alt}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div
          className="card-body d-flex flex-column justify-content-between"
          style={{ gap: "1.2rem" }}
        >
          <h5 className="card-title fw-bold text-center w-100">{titulo}</h5>
          <p className="card-text small text-muted text-center w-100">
            {descripcion}
          </p>
          <p className="fs-5 fw-bold text-success mb-0 text-center w-100">
            ${precio}
          </p>
          <div className="d-flex justify-content-between align-items-center w-100">
            <button
              className="btn btn-outline-primary"
              onClick={reducirContador}
            >
              <i className="bi bi-dash"></i>
            </button>
            <span className="fw-bold">{contador}</span>
            <button
              className="btn btn-outline-primary"
              onClick={aumentarContador}
            >
              <i className="bi bi-plus"></i>
            </button>
          </div>
          <button
            className="btn btn-success w-100"
            disabled={contador <= 0}
            onClick={handleAgregar}
          >
            Agregar al carrito
          </button>
          {mensaje && (
            <div className="alert alert-success py-1 mt-2 mb-0 text-center" style={{ fontSize: "0.95rem" }}>
              {mensaje}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
