import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Bienvenidos al SGA</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Plataforma integral para la gestión escolar, conectando alumnos, docentes y padres.
      </p>
      <Link to="/login" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '0.75rem 2rem' }}>
        Acceder al Sistema
      </Link>
    </div>
  );
}
