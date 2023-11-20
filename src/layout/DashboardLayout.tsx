import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DefaultLayoutProps) {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
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