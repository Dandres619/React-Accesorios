import React, { useState } from "react";
import Swal from 'sweetalert2'

export function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    numero: "",
    correo: "",
  });

  const [errores, setErrores] = useState({});
  const [focusInput, setFocusInput] = useState(false);

  const validarCampo = (name, value) => {
    let error = "";

    switch (name) {
      case "nombre":
        if (value.trim().length < 5 || value.trim().length > 30) {
          error = "El nombre debe estar entre 5 y 30 caracteres";
        }
        break;

      case "apellido":
        if (value.trim().length < 5 || value.trim().length > 30) {
          error = "El apellido debe estar entre 5 y 30 caracteres";
        }
        break;

      case "numero":
        if (!/^\d{7,10}$/.test(value)) {
          error = "El número debe contener entre 7 y 10 dígitos numéricos";
        }
        break;

      case "correo":
        if (!/^\S+@\S+\.\S+$/.test(value)) {
          error = "Ingrese un correo electrónico válido";
        }
        break;

      default:
        break;
    }

    setErrores((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validarCampo(name, value);
  };

  const manejoFormulario = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Formulario enviado",
      text: "El formulario fue completado y enviado exitosamente",
      icon: "success"
    });

    setFormData({nombre: "", apellido: "", numero: "", correo: ""})
  };

  const hayErrores = Object.values(errores).some((error) => error);
  console.log(hayErrores);
  const camposVacios = Object.values(formData).some(
    (valor) => valor.trim() === ""
  );

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <main className="flex-fill">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-4">
                  <h2 className="text-center mb-4 fw-bold text-dark">
                    <i className="bi bi-chat-dots-fill me-2"></i>
                    Formulario de contacto
                  </h2>
                  <form onSubmit={manejoFormulario} noValidate>
                    <div className="mb-3">
                      <label
                        htmlFor="nombreFormInput"
                        className="form-label fw-semibold"
                      >
                        <i className="bi bi-person-fill me-2 text-dark"></i>
                        Nombre<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errores.nombre ? "is-invalid" : ""
                        }`}
                        id="nombreFormInput"
                        name="nombre"
                        placeholder="Andrés"
                        value={formData.nombre}
                        onChange={handleChange}
                        onFocus={() => setFocusInput(true)}
                        onBlur={() => setFocusInput(false)}
                      />
                      {errores.nombre && (
                        <div className="invalid-feedback">{errores.nombre}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="apellidoFormInput"
                        className="form-label fw-semibold"
                      >
                        <i className="bi bi-person-bounding-box me-2 text-dark"></i>
                        Apellido<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errores.apellido ? "is-invalid" : ""
                        }`}
                        id="apellidoFormInput"
                        name="apellido"
                        placeholder="Iniesta"
                        value={formData.apellido}
                        onChange={handleChange}
                        onFocus={() => setFocusInput(true)}
                        onBlur={() => setFocusInput(false)}
                      />
                      {errores.apellido && (
                        <div className="invalid-feedback">
                          {errores.apellido}
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="numeroFormInput"
                        className="form-label fw-semibold"
                      >
                        <i className="bi bi-telephone-fill me-2 text-dark"></i>
                        Número de teléfono<span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className={`form-control ${
                          errores.numero ? "is-invalid" : ""
                        }`}
                        id="numeroFormInput"
                        name="numero"
                        placeholder="3005553040"
                        value={formData.numero}
                        onChange={handleChange}
                        onFocus={() => setFocusInput(true)}
                        onBlur={() => setFocusInput(false)}
                      />
                      {errores.numero && (
                        <div className="invalid-feedback">{errores.numero}</div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="correoFormInput"
                        className="form-label fw-semibold"
                      >
                        <i className="bi bi-envelope-fill me-2 text-dark"></i>
                        Correo electrónico<span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-control ${
                          errores.correo ? "is-invalid" : ""
                        }`}
                        id="correoFormInput"
                        name="correo"
                        placeholder="andiniesta@gmail.com"
                        value={formData.correo}
                        onChange={handleChange}
                        onFocus={() => setFocusInput(true)}
                        onBlur={() => setFocusInput(false)}
                      />
                      {errores.correo && (
                        <div className="invalid-feedback">{errores.correo}</div>
                      )}
                    </div>

                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary fw-semibold py-2"
                        disabled={hayErrores || camposVacios}
                      >
                        <i className="bi bi-send-fill me-2"></i>
                        Enviar formulario
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <p
                className="text-center mt-4 text-muted"
                style={{ fontSize: "0.9rem" }}
              >
                <i className="bi bi-info-circle-fill me-2"></i>
                Nos pondremos en contacto contigo lo antes posible.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Formulario;