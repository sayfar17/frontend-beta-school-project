import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { PublicLayout } from '../layouts/PublicLayout/PublicLayout';
import { LandingLayout } from '../layouts/LandingLayout/LandingLayout';
import { AdminLayout } from '../layouts/AdminLayout/AdminLayout';
import { ProtectedRoutes } from './ProtectedRoutes';
import { ROLES } from '../constants/roles';

// Componente de Carga
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
    <div className="loader">Cargando...</div>
  </div>
);

// Lazy Loaded Features
const Landing = React.lazy(() => import('../features/landing/Landing'));
const Login = React.lazy(() => import('../features/auth/Login'));
const Dashboard = React.lazy(() => import('../features/dashboard/Dashboard'));
const AlumnosList = React.lazy(() => import('../features/alumnos/AlumnosList'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Rutas Públicas - Institucional */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/noticias" element={<div className="card">Noticias en construcción</div>} />
          <Route path="/contacto" element={<div className="card">Contacto en construcción</div>} />
        </Route>

        {/* Rutas Públicas - Autenticación */}
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar" element={<div className="card">Recuperación de contraseña</div>} />
        </Route>

        {/* Rutas Privadas - Sistema (Protegidas por Login) */}
        <Route path="/app" element={<ProtectedRoutes />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            
            {/* Solo Admin */}
            <Route element={<ProtectedRoutes allowedRoles={[ROLES.ADMIN]} />}>
              <Route path="alumnos" element={<AlumnosList />} />
              <Route path="docentes" element={<div className="card">Gestión de Docentes</div>} />
              <Route path="padres" element={<div className="card">Gestión de Padres</div>} />
              <Route path="academico" element={<div className="card">Cursos y Grados</div>} />
            </Route>

            {/* Admin y Docentes */}
            <Route element={<ProtectedRoutes allowedRoles={[ROLES.ADMIN, ROLES.DOCENTE]} />}>
              <Route path="asistencia" element={<div className="card">Toma de Asistencia</div>} />
              <Route path="notas" element={<div className="card">Registro de Notas</div>} />
            </Route>

            {/* Todas las demás vistas por defecto */}
            <Route path="comunicaciones" element={<div className="card">Publicaciones e Informes</div>} />
            <Route path="reportes" element={<div className="card">Reportes y Analíticas</div>} />
          </Route>
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
