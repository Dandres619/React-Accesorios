import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { HomePage } from "./Features/Pages/Components/HomePage";
import { LoginForm } from "./Features/auth/components/LoginForm";
import { RegisterForm } from "./Features/auth/components/RegisterForm";
import { Navbar } from "./Features/LandingPage/Components/Navbar";
import { Footer } from "./Features/LandingPage/Components/Footer";
import Formulario from "./Features/LandingPage/Components/Formulario";
import { CarritoModal } from "./Features/Carrito/Components/CarritoModal";

function AppContent() {
  const location = useLocation();
  const [showCarrito, setShowCarrito] = useState(false);

  const isAuthPage =
    location.pathname === "/" || location.pathname === "/registrarse";

  return (
    <>
      {!isAuthPage && <Navbar onCarritoClick={() => setShowCarrito(true)} />}

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/registrarse" element={<RegisterForm />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>

      <CarritoModal show={showCarrito} onClose={() => setShowCarrito(false)} />

      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/React-Accesorios/">
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
