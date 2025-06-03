import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import Formulario from "./Formulario/Formulario";

function App() {
  return (
    <BrowserRouter basename="/React-Accesorios">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
