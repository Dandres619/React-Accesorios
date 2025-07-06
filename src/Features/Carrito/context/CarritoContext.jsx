import React, { createContext, useEffect, useReducer } from "react";
import { carritoReducer } from "./carritoReducer";

export const CarritoContext = createContext();

const inicializarCarrito = () => {
  const carritoGuardado = localStorage.getItem("carrito");
  return carritoGuardado ? JSON.parse(carritoGuardado) : [];
};

export function CarritoProvider({ children }) {
  const [carrito, dispatch] = useReducer(
    carritoReducer,
    [],
    inicializarCarrito
  );

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) =>
    dispatch({ type: "AGREGAR", payload: producto });

  const eliminarDelCarrito = (titulo) =>
    dispatch({ type: "ELIMINAR", payload: titulo });

  const vaciarCarrito = () => dispatch({ type: "VACIAR" });

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
