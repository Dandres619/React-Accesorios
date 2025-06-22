import React from "react";
import { Slider } from "../../LandingPage/Components/Slider";
import { Calidad } from "../../LandingPage/Components/Calidad";
import { Productos } from "../../LandingPage/Components/Productos";
import { Contacto } from "../../LandingPage/Components/Contacto";

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