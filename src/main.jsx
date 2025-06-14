import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ProductProvider } from "./Features/ProductContext/ProductContext.jsx";
import App from "./App.jsx";
import { CarritoProvider } from "./Features/Productos/Carrito.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </ProductProvider>
  </StrictMode>
);
