import logo from '../../assets/tienda-logo.png'
import { Link } from "react-router-dom";

export function Navbar({ onCarritoClick }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img 
              src={logo} 
              alt="Logo de la pagina"
              width="90"
              height="80"
              className="d-inline-block align-text-top" 
            />
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href='#Carrusel'>Inicio</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#Calidad'>Calidad</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#Productos'>Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#Contacto'>Contacto</a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-light ms-3"
                  onClick={onCarritoClick}
                  type="button"
                >
                  <i className="bi bi-cart"></i> Carrito
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}