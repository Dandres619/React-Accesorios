import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../Carrito/context/ProductContext";

export function ProductForm({ producto, modoEdicion, onClose }) {
  const { crearProducto, editarProducto } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (producto) {
      setFormData(producto);
    }
  }, [producto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (modoEdicion) {
      await editarProducto(producto.id, formData);
    } else {
      console.log("Creando nuevo producto:", formData); // Agrega esto
      await crearProducto(formData);
    }
    onClose();
  };

  return (
    <div className="card shadow p-4 mt-4">
      <h5 className="mb-3">
        {modoEdicion ? "Editar producto" : "Crear producto"}
      </h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            name="description"
            className="form-control"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen (URL)</label>
          <input
            type="text"
            name="image"
            className="form-control"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-flex justify-content-end gap-2">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-success">
            {modoEdicion ? "Actualizar" : "Crear"}
          </button>
        </div>
      </form>
    </div>
  );
}
