import { useState } from "react";

export function ProductoCard({ imagen, titulo, descripcion, precio, alt }) {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => setContador((prev) => prev === 10 ? 10 : prev + 1);
  const reducirContador = () =>
    setContador((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="col-md-6 col-lg-3">
      <div className="card h-100 shadow border-0 producto-card transition-hover">
        <img
          src={imagen}
          className="card-img-top object-fit-cover"
          alt={alt}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="text-center">
            <h5 className="card-title fw-bold">{titulo}</h5>
            <p className="card-text small text-muted">{descripcion}</p>
            <p className="fs-5 fw-bold text-success mb-3">${precio}</p>
          </div>

          <div className="d-flex justify-content-between align-items-center gap-3">
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
        </div>
      </div>
    </div>
  );
}
