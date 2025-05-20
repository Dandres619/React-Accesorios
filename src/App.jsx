import './App.css';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Slider } from './Slider/Slider';
import { Calidad } from './Calidad/Calidad';
import { Productos } from './Productos/Productos';
import { Contacto } from './Contacto/Contacto';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Slider />
        <Calidad />
        <Productos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
