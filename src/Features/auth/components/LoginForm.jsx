import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../hooks/useAuth";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Correo inválido");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 4) {
      setPasswordError("La contraseña debe tener al menos 4 caracteres");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");

    // Asegurarse que los errores no estén presentes
    if (emailError || passwordError || !email || !password) {
      setLocalError("Por favor corrige los errores antes de continuar.");
      return;
    }

    const result = await login({ email, password });

    if (result?.meta?.requestStatus === "fulfilled") {
      navigate("/inicio");
    } else {
      setLocalError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-gradient">
      <div
        className="card shadow-lg p-4 border-0"
        style={{ width: "100%", maxWidth: "420px", borderRadius: "1.5rem" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold">Bienvenido</h2>
          <p className="text-muted">Inicia sesión para continuar</p>
        </div>

        {localError && (
          <div className="alert alert-danger text-center" role="alert">
            {localError}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaUser />
              </span>
              <input
                type="email"
                className={`form-control ${emailError ? "is-invalid" : ""}`}
                placeholder="usuario@ejemplo.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {emailError && <div className="text-danger mt-1">{emailError}</div>}
          </div>

          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaLock />
              </span>
              <input
                type="password"
                className={`form-control ${passwordError ? "is-invalid" : ""}`}
                placeholder="Tu contraseña"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            {passwordError && (
              <div className="text-danger mt-1">{passwordError}</div>
            )}
          </div>

          <div className="d-grid mb-3">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "Cargando..." : "Ingresar"}
            </button>
          </div>

          <div className="text-center mb-2">
            <Link to="#" className="text-decoration-none text-secondary small">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <hr className="my-3" />

          <div className="text-center">
            <p className="mb-1">¿No tienes cuenta?</p>
            <Link
              to="/registrarse"
              className="btn btn-outline-secondary btn-sm"
            >
              Crear cuenta
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
