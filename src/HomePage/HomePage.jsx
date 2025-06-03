import React from "react";
import { Slider } from "../Slider/Slider";
import { Calidad } from "../Calidad/Calidad";
import { Productos } from "../Productos/Productos";
import { Contacto } from "../Contacto/Contacto";

export function HomePage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Slider />
        <Calidad />
        <Productos />
        <Contacto />
      </main>
    </div>
  );
}