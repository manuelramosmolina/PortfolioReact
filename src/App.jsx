import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProveedorTema } from './context/ContextoTema';
import Encabezado from './components/Encabezado';
import Navegacion from './components/Navegacion';
import PiePagina from './components/PiePagina';
import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import ExperiencePage from './pages/ExperiencePage';
import './App.css';

function Aplicacion() {
  return (
    <ProveedorTema>
      <Router basename={import.meta.env.BASE_URL}>
        <div className="App">
          <Encabezado />
          <Navegacion />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <PiePagina />
        </div>
      </Router>
    </ProveedorTema>
  );
}

export default Aplicacion;
