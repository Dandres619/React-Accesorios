export function ProductoCard({ imagen, titulo, descripcion, precio, alt }) {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="col-md-3">
      <div className="card h-100 shadow-sm">
        <img
          src={`${baseUrl}${imagen}`}
          className="card-img-top object-fit-cover"
          alt={alt}
          style={{ height: "200px" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <p className="fw-bold text-success">${precio}</p>
          <button className="btn btn-outline-dark">Comprar</button>
        </div>
      </div>
    </div>
  );
}