import { useContext, useState, useMemo } from "react";
import { ProductContext } from "../../Carrito/context/ProductContext";
import { DashboardCard } from "../components/DashboardCard";
import { ProductForm } from "../components/ProductForm";

export function DashboardPage() {
  const { productos, loading, error, eliminarProducto } =
    useContext(ProductContext);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [productoActual, setProductoActual] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 6;

  const productosFiltrados = useMemo(() => {
    return productos.filter((p) =>
      p.title.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [productos, busqueda]);

  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );
  const productosPaginados = useMemo(() => {
    const start = (paginaActual - 1) * productosPorPagina;
    return productosFiltrados.slice(start, start + productosPorPagina);
  }, [paginaActual, productosFiltrados]);

  const handleEditar = (producto) => {
    setProductoActual(producto);
    setModoEdicion(true);
    setMostrarFormulario(true);
  };

  const handleCrear = () => {
    setProductoActual(null);
    setModoEdicion(false);
    setMostrarFormulario(true);
  };

  const handleEliminar = async (id) => {
    await eliminarProducto(id);
  };

  const cambiarPagina = (numero) => setPaginaActual(numero);

  if (loading) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <main className="flex-grow-1 d-flex justify-content-center align-items-center">
          <p className="text-center">Cargando productos...</p>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <main className="flex-grow-1 d-flex justify-content-center align-items-center">
          <p className="text-danger text-center">{error}</p>
        </main>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <section className="py-5">
          <div className="container">
            <h2 className="fw-bold text-center text-dark mb-4">
              Dashboard de productos
            </h2>

            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar producto por nombre..."
                value={busqueda}
                onChange={(e) => {
                  setBusqueda(e.target.value);
                  setPaginaActual(1);
                }}
                style={{ maxWidth: "400px" }}
              />
              <button className="btn btn-primary" onClick={handleCrear}>
                Crear nuevo producto
              </button>
            </div>

            <div className="row g-4">
              {productosPaginados.length > 0 ? (
                productosPaginados.map((producto) => (
                  <DashboardCard
                    key={producto._id}
                    producto={producto}
                    onEdit={handleEditar}
                    onDelete={handleEliminar}
                  />
                ))
              ) : (
                <div className="text-center w-100 mt-5">
                  <i className="bi bi-box-seam fs-1 text-muted"></i>
                  <p className="mt-2 text-muted">
                    No hay productos que coincidan con la búsqueda.
                  </p>
                </div>
              )}
            </div>

            {totalPaginas > 1 && (
              <nav className="mt-5">
                <ul className="pagination justify-content-center">
                  {Array.from({ length: totalPaginas }).map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        paginaActual === index + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => cambiarPagina(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {mostrarFormulario && (
              <ProductForm
                onClose={() => setMostrarFormulario(false)}
                producto={productoActual}
                modoEdicion={modoEdicion}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
