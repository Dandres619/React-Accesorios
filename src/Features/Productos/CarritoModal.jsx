import { useContext } from "react";
import { CarritoContext } from "./Carrito";

export function CarritoModal({ show, onClose }) {
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  const totalCarrito = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  if (!show) return null;

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",
        background: "rgba(0,0,0,0.5)",
        zIndex: 1050,
      }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Carrito de compras</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {carrito.length === 0 ? (
              <div className="text-center text-muted py-4">
                <i className="bi bi-cart-x fs-1"></i>
                <p className="mt-2">El carrito está vacío.</p>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">Producto</th>
                      <th scope="col" className="text-center">Cantidad</th>
                      <th scope="col" className="text-end">Total</th>
                      <th scope="col" className="text-center">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrito.map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src={item.imagen}
                              alt={item.titulo}
                              style={{
                                width: "40px",
                                height: "40px",
                                objectFit: "cover",
                                borderRadius: "6px",
                              }}
                            />
                            <span>{item.titulo}</span>
                          </div>
                        </td>
                        <td className="text-center">{item.cantidad}</td>
                        <td className="text-end">
                          ${(item.precio * item.cantidad).toFixed(2)}
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => eliminarDelCarrito(item.titulo)}
                            title="Eliminar"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2} className="fw-bold text-end">
                        Total:
                      </td>
                      <td className="fw-bold text-end text-success">
                        ${totalCarrito.toFixed(2)}
                      </td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-success"
              disabled={carrito.length === 0}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}