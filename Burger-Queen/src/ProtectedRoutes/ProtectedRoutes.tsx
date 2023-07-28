import React, { ReactNode } from 'react';
import { Navigate, RouteProps } from 'react-router-dom';

type ProtectedRouteProps = {
    element: ReactNode;
    allowedRoles: string[];
} & RouteProps;

const ProtectedRoute: React.FC <ProtectedRouteProps> = ({ element, allowedRoles }) => {
  const userRole = localStorage.getItem('userRole');

  if (!userRole || !allowedRoles.includes(userRole)) {
    // Si no hay rol o el rol no está permitido, redirige al usuario a la página de inicio de sesión.
    return <Navigate to="/login" />;
  }

  // Si el rol es válido, permite el acceso a la ruta.
  return <>{element} </>;
};

export default ProtectedRoute;
