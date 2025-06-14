import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Features/HomePage/HomePage";
import { Navbar } from "./Features/Navbar/Navbar";
import { Footer } from "./Features/Footer/Footer";
import Formulario from "./Features/Formulario/Formulario";
import { useState } from "react";
import { CarritoModal } from "./Features/Productos/CarritoModal";

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
