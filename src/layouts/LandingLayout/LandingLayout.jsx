import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { GraduationCap, Sun, Moon } from 'lucide-react';
import './LandingLayout.css';

export const LandingLayout = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="landing-layout">
      <header className="landing-header glass-panel">
        <div className="landing-container header-content">
          <Link to="/" className="logo">
            <GraduationCap className="logo-icon" size={28} />
            <span className="logo-text">Colegio SGA</span>
          </Link>
          
          <nav className="landing-nav">
            <Link to="/">Inicio</Link>
            <Link to="/noticias">Noticias</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>

          <div className="header-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Link to="/login" className="btn btn-primary">Portal SGA</Link>
          </div>
        </div>
      </header>

      <main className="landing-main">
        <Outlet />
      </main>

      <footer className="landing-footer">
        <div className="landing-container">
          <p>&copy; {new Date().getFullYear()} Sistema de Gestión Académica. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
