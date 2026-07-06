import React from 'react';

export default function AlumnosList() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2>Gestión de Alumnos</h2>
        <button className="btn btn-primary">Registrar Alumno</button>
      </div>
      
      <div className="card">
        <p style={{ color: 'var(--text-secondary)' }}>Tabla de alumnos en construcción...</p>
      </div>
    </div>
  );
}
