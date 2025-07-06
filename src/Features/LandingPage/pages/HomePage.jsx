import React from "react";
import { Slider } from "../Components/Slider";
import { Calidad } from "../Components/Calidad";
import { Productos } from "../Components/Productos";
import { Contacto } from "../Components/Contacto";

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