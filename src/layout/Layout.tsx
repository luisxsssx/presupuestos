import { Link } from "react-router-dom";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function LayoutNav({ children }: DefaultLayoutProps) {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="nav-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}