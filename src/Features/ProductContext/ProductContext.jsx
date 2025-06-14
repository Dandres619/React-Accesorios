import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function datosDeportivos() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductos(data);
        setLoading(false);
      } catch (error) {
        setError(error.message || "Error al cargar productos");
        setLoading(false);
      }
    }
    datosDeportivos();
  }, []);

  return (
    <ProductContext.Provider
      value={{ productos, loading, error }}
    >
      {children}
    </ProductContext.Provider>
  );
};
