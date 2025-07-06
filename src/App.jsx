import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ProtectedRoute } from "./Features/auth/components/ProtectedRoute";
import { useState } from "react";
import { HomePage } from "./Features/LandingPage/pages/HomePage";
import { LoginForm } from "./Features/auth/components/LoginForm";
import { RegisterForm } from "./Features/auth/components/RegisterForm";
import { Navbar } from "./Features/LandingPage/Components/Navbar";
import { Footer } from "./Features/LandingPage/Components/Footer";
import { CarritoModal } from "./Features/Carrito/components/CarritoModal";
import { DashboardPage } from "./Features/dashboard/pages/DashboardPage"
import Formulario from "./Features/LandingPage/Components/Formulario";

function AppContent() {
  const location = useLocation();
  const [showCarrito, setShowCarrito] = useState(false);

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/registrarse";

  return (
    <>
      {!isAuthPage && <Navbar onCarritoClick={() => setShowCarrito(true)} />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registrarse" element={<RegisterForm />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
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
