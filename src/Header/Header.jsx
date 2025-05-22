import logo from '../assets/tienda-logo.png'

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img 
            src={logo} 
            alt="Logo de la pagina"
            width="90"
            height="80"
            className="d-inline-block align-text-top" 
            />
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='#Carrusel'>Inicio</a>
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
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}