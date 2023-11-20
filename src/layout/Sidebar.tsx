import { Link } from "react-router-dom";

interface DefaultLayoutProps {
    children: React.ReactNode;
}

export default function Sidebar({ children }: DefaultLayoutProps) {
  return (
    <>
      <div className="sidebar">
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="list-group-item">pre</li>
        </ul>
      </div>
      <main>{children}</main>
    </>
  );
}