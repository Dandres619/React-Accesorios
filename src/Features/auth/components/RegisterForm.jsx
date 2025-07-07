import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  const { register, error } = useAuth();
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);
  const [localError, setLocalError] = useState(null);

  const validateName = name.trim().length >= 3;
  const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = password.length >= 6;

  const isFormValid = validateName && validateEmail && validatePassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, password: true });
    setSubmitted(true);

    if (isFormValid) {
      const result = await register({ name, email, password });
      if (result?.meta?.requestStatus === "fulfilled") {
        navigate("/");
      } else {
        setLocalError(result.payload);
      }
    }
  };

  const getInputClass = (valid) => {
    if (!touched) return "form-control";
    return valid ? "form-control is-valid" : "form-control is-invalid";
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "1rem" }}
      >
        <h3 className="text-center mb-4">Registrarse</h3>

        {(localError || error) && (
          <div className="alert alert-danger text-center" role="alert">
            {localError || error}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Nombre */}
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaUser />
              </span>
              <input
                type="text"
                className={getInputClass(validateName)}
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
              />
            </div>
            {touched.name && !validateName && (
              <div className="invalid-feedback">
                Debe tener al menos 3 letras.
              </div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaEnvelope />
              </span>
              <input
                type="email"
                className={getInputClass(validateEmail)}
                placeholder="usuario@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
              />
            </div>
            {touched.email && !validateEmail && (
              <div className="invalid-feedback">Correo no válido.</div>
            )}
          </div>

          {/* Contraseña */}
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaLock />
              </span>
              <input
                type="password"
                className={getInputClass(validatePassword)}
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, password: true }))
                }
              />
            </div>
            {touched.password && !validatePassword && (
              <div className="invalid-feedback">Mínimo 6 caracteres.</div>
            )}
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-success"
              disabled={!isFormValid}
            >
              Registrarse
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <p className="text-muted">¿Ya tienes una cuenta?</p>
          <Link to={"/"} className="text-decoration-none">
            Inicia sesión aquí
          </Link>
        </div>
      </div>
    </div>
  );
};
