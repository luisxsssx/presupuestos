import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthProvider';

export default function ProtectedRoute() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}