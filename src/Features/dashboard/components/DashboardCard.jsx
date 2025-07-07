import React from "react";

export function DashboardCard({ producto, onEdit, onDelete }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm">
        <img
          src={producto.image}
          alt={producto.title}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{producto.title}</h5>
          <p className="card-text text-muted small">{producto.description}</p>
          <p className="fw-bold text-success">${producto.price}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button
            className="btn btn-warning btn-sm"
            onClick={() => onEdit(producto)}
          >
            Editar
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(producto.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
