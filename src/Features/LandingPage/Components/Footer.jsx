import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <h5>AllVibe</h5>
        <p>&copy; 2025 AllVibe. Todos los derechos reservados.</p>
        <div>
          <Link to="/" className="text-white me-3">
            Facebook
          </Link>
          <Link to="/" className="text-white me-3">
            Twitter
          </Link>
          <Link to="/" className="text-white">
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}