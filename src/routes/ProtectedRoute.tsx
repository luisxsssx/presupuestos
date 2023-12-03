import { Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from '../auth/AuthProvider';

export default function ProtectedRoute() {
  const auth = useAuth();

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}