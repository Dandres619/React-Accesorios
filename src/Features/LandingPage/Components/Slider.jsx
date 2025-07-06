export function Slider() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section
      id="Carrusel"
      className="carousel slide w-100"
      data-bs-ride="carousel"
      style={{ height: "70vh", overflow: "hidden" }}
    >
      <div className="carousel-inner h-100">
        <div className="carousel-item active h-100 position-relative">
          <img
            src={`${baseUrl}carrusel/ropa-variada.jpg`}
            className="d-block w-100 h-100 object-fit-cover"
            alt="Balon de futbol en la cancha"
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1 }}
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle text-white text-center"
            style={{ zIndex: 2 }}
          >
            <h2 className="display-5 fw-bold">¡AllVibe!</h2>
            <p className="lead">
              Accesorios deportivos, tecnología, joyería y más.
            </p>
          </div>
        </div>

        <div className="carousel-item h-100 position-relative">
          <img
            src={`${baseUrl}carrusel/disco-duro.avif`}
            className="d-block w-100 h-100 object-fit-cover"
            alt="Deportista tomando de botellas de agua"
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1 }}
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle text-white text-center"
            style={{ zIndex: 2 }}
          >
            <h2 className="display-5 fw-bold">Todo sobre tecnología</h2>
            <p className="lead">¡Encuentra las mejores piezas!</p>
          </div>
        </div>

        <div className="carousel-item h-100 position-relative">
          <img
            src={`${baseUrl}carrusel/anillo-diamante.avif`}
            className="d-block w-100 h-100 object-fit-cover"
            alt="Llaveros deportivos"
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1 }}
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle text-white text-center"
            style={{ zIndex: 2 }}
          >
            <h2 className="display-5 fw-bold">Lo mejor en joyería</h2>
            <p className="lead">Solo aquí encuentras lo más exclusivo.</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#Carrusel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#Carrusel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </section>
  );
}
