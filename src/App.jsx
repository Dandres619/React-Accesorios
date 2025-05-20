import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Header } from './Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App