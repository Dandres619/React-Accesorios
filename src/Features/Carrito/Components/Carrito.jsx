import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.titulo === producto.titulo);
      if (existe) {
        return prev.map((item) =>
          item.titulo === producto.titulo
            ? { ...item, cantidad: item.cantidad + producto.cantidad }
            : item
        );
      } else {
        return [...prev, producto];
      }
    });
  };

  const eliminarDelCarrito = (titulo) => {
    setCarrito((prev) => prev.filter((item) => item.titulo !== titulo));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}