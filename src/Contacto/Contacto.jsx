import { Link } from "react-router-dom";

export function Contacto() {
  return (
    <section id="Contacto" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">Contáctanos</h2>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 bg-white border rounded shadow-sm h-100">
              <h5 className="fw-bold mb-4">
                <i className="bi bi-geo-alt-fill me-2 text-danger"></i>
                Visítanos en nuestra tienda
              </h5>
              <ul className="list-unstyled mb-4">
                <li className="mb-3">
                  <i className="bi bi-geo-alt me-2 text-secondary"></i>
                  Exito de Colombia, Local 290
                </li>
                <li className="mb-3">
                  <i className="bi bi-telephone me-2 text-secondary"></i>
                  +57 300 573 3629
                </li>
                <li className="mb-3">
                  <i className="bi bi-envelope me-2 text-secondary"></i>
                  contacto@futvibe.com
                </li>
                <li>
                  <i className="bi bi-clock me-2 text-secondary"></i>
                  Lunes a Sábado: 9:00 AM - 6:00 PM
                </li>
              </ul>
              <Link to="/formulario" className="btn btn-outline-primary w-100">
                <i className="bi bi-pencil-square me-2"></i>
                Ir al Formulario de Contacto
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-1 bg-white border rounded shadow-sm h-100">
              <div className="ratio ratio-4x3 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0581166925845!2d-75.58525412519643!3d6.256074493732429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442905b557d4f7%3A0xf3c68e398803db68!2s%C3%89xito%20Colombia!5e0!3m2!1ses-419!2sco!4v1747781865099!5m2!1ses-419!2sco"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Tienda"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-md-8 text-center">
            <h5 className="fw-bold mb-3">Síguenos en nuestras redes</h5>
            <div className="d-flex justify-content-center gap-4 fs-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger text-decoration-none"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-decoration-none"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://wa.me/573005733629"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success text-decoration-none"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
