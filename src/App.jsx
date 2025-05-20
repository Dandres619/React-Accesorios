import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
