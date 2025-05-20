export function Contacto() {
  return (
    <section id="Contacto" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Contáctanos</h2>

        <div className="row g-4 h-100">
          <div className="col-md-6 h-100">
            <div className="p-3 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Visítanos en nuestra tienda</h5>
              <p className="mb-1">📍 FutVibe, Exito de Colombia. Local 290</p>
              <p className="mb-1">📞 +57 300 573 3629</p>
              <p className="mb-1">📧 contacto@futvibe.com</p>
              <p className="mb-0">⏰ Lunes a Sábado: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="ratio ratio-4x3 shadow-sm rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0581166925845!2d-75.58525412519643!3d6.256074493732429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442905b557d4f7%3A0xf3c68e398803db68!2s%C3%89xito%20Colombia!5e0!3m2!1ses-419!2sco!4v1747781865099!5m2!1ses-419!2sco"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Ubicación Tienda"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
