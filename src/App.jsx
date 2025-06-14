import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Features/HomePage/HomePage";
import { Navbar } from "./Features/Navbar/Navbar";
import { Footer } from "./Features/Footer/Footer";
import Formulario from "./Features/Formulario/Formulario";

function App() {
  return (
    <BrowserRouter basename="/React-Accesorios/">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
