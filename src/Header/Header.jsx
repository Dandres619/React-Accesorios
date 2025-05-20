import logo from '../assets/tienda-logo.png'
import { Link } from 'react-router-dom'

export function Header() {
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
                <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/calidad" className="nav-link">Calidad</Link>
              </li>
              <li className="nav-item">
                <Link to="/productos" className="nav-link">Productos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}