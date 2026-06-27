import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoutes = ({ allowedRoles = [] }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si se envían allowedRoles y el rol del usuario no está, bloquear acceso.
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    // Redirigir a una página de "No Autorizado" o al Dashboard Base.
    return <Navigate to="/app" replace />;
  }

  return <Outlet />;
};
