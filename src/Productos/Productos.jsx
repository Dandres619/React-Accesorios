export function Productos() {
  return (
    <section id="Productos" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Nuestros Productos</h2>
        <div className="row g-4">

          <div className="col-md-3">
            <div className="card h-100 shadow-sm">
              <img
                src="/productos/camiseta-futbol.jpg"
                className="card-img-top object-fit-cover"
                alt="Camiseta Futbol"
                style={{ height: "200px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Camiseta Futbol Retro</h5>
                <p className="card-text">Diseño clásico de tus equipos favoritos.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 shadow-sm">
              <img
                src="/productos/botella-deportiva.jpg"
                className="card-img-top object-fit-cover"
                alt="Botella Deportiva"
                style={{ height: "200px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Botella Deportiva</h5>
                <p className="card-text">Mantente hidratado con estilo.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 shadow-sm">
              <img
                src="/productos/llavero-balón.jpg"
                className="card-img-top object-fit-cover"
                alt="Llavero balón"
                style={{ height: "200px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Llavero Balón</h5>
                <p className="card-text">Perfecto para fans y coleccionistas.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 shadow-sm">
              <img
                src="/productos/polera-equipo.jpg"
                className="card-img-top object-fit-cover"
                alt="Polera con logo"
                style={{ height: "200px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Polera de Hincha</h5>
                <p className="card-text">Demuestra tu pasión en cada salida.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}