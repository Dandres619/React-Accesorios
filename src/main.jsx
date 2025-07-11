import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ProductProvider } from "./Features/Carrito/context/ProductContext.jsx";
import { CarritoProvider } from "./Features/Carrito/context/CarritoContext.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ProductProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </ProductProvider>
    </Provider>
  </StrictMode>
);
