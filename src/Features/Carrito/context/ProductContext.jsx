import React, { createContext, useState, useEffect } from "react";
import {
  obtenerProductos,
  crearProductoDB,
  editarProductoDB,
  eliminarProductoDB,
} from "../../dashboard/services/productosService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const cargarProductos = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await obtenerProductos();
      setProductos(data);
    } catch (err) {
      console.error("Error al cargar productos:", err.message);
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  const crear = async (nuevoProducto) => {
    try {
      await crearProductoDB(nuevoProducto);
      await cargarProductos();
    } catch (err) {
      console.error("Error al crear producto:", err.message);
      setError("Error al crear producto");
    }
  };

  const editar = async (id, actualizado) => {
    try {
      await editarProductoDB(id, actualizado);
      await cargarProductos();
    } catch (err) {
      setError("Error al editar producto");
    }
  };

  const eliminar = async (id) => {
    try {
      await eliminarProductoDB(id);
      await cargarProductos();
    } catch (err) {
      setError("Error al eliminar producto");
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productos,
        loading,
        error,
        crearProducto: crear,
        editarProducto: editar,
        eliminarProducto: eliminar,
        cargarProductos,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
