import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DefaultLayoutProps) {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      // Manejar el error, si es necesario
    }
  }

  return (
    <>
      <header>
         <nav className="navbar">
            <ul>
              <li>
                <Link to="/" onClick={handleLogout}>Exit</Link>
              </li>
            </ul>
          </nav>
      </header>
      <main>{children}</main>
    </>
  );
}