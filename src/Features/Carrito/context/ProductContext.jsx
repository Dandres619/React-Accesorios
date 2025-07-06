import React, { createContext, useEffect, useState } from "react";
import {
  obtenerProductos,
  crearProducto,
  editarProducto,
  eliminarProducto,
} from "../../dashboard/services/productosService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const cargarProductos = async () => {
    try {
      setLoading(true);
      const data = await obtenerProductos();
      setProductos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const crear = async (nuevoProducto) => {
    await crearProducto(nuevoProducto);
    cargarProductos();
  };

  const editar = async (id, actualizado) => {
    await editarProducto(id, actualizado);
    cargarProductos();
  };

  const eliminar = async (id) => {
    await eliminarProducto(id);
    cargarProductos();
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
        recargarProductos: cargarProductos,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
