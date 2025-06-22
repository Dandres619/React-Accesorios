import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { HomePage } from "./Features/Pages/Components/HomePage";
import { Navbar } from "./Features/LandingPage/Components/Navbar";
import { Footer } from "./Features/LandingPage/Components/Footer";
import Formulario from "./Features/LandingPage/Components/Formulario";
import { CarritoModal } from "./Features/Carrito/Components/CarritoModal";

function App() {
  const [showCarrito, setShowCarrito] = useState(false);

  return (
    <BrowserRouter basename="/React-Accesorios/">
      <Navbar onCarritoClick={() => setShowCarrito(true)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
      <CarritoModal show={showCarrito} onClose={() => setShowCarrito(false)} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
