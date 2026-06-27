import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function Dashboard() {
  const { user } = useAuth();
  
  return (
    <div>
      <h1 style={{ marginBottom: '1.5rem' }}>Bienvenido, {user?.name}</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <div className="card">
          <h3>Resumen</h3>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
            Has iniciado sesión con el rol: <strong>{user?.role}</strong>
          </p>
        </div>
        <div className="card">
          <h3>Notificaciones</h3>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
            No hay notificaciones nuevas por el momento.
          </p>
        </div>
      </div>
    </div>
  );
}
