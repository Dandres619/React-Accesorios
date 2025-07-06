import logo from "../../../assets/tienda-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";

export function Navbar({ onCarritoClick }) {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2">
        <div className="container">
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
            <img
              src={logo}
              alt="Logo de la página"
              width="50"
              height="50"
              className="d-inline-block"
              style={{ objectFit: "cover", borderRadius: "6px" }}
            />
            <span className="fw-semibold fs-5 text-white mb-0">AllVibe</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarContent"
          >
            <ul className="navbar-nav align-items-center gap-3">
              {["Inicio", "Calidad", "Productos", "Contacto"].map((item, i) => (
                <li className="nav-item" key={i}>
                  <a
                    href={`#${item}`}
                    className="nav-link text-white small fw-semibold"
                  >
                    {item}
                  </a>
                </li>
              ))}

              <li className="nav-item">
                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={onCarritoClick}
                  type="button"
                >
                  <i className="bi bi-cart-fill me-1"></i> Carrito
                </button>
              </li>

              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link
                      to="/dashboard"
                      className="btn btn-outline-warning btn-sm"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={handleLogout}
                    >
                      Cerrar sesión
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="btn btn-outline-light btn-sm">
                    Iniciar sesión
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
