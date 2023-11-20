import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";


export default function Dashboard() {

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  }

  return (
    <>
      <DashboardLayout>
        <h1 className="ls-dash">jefnbvjetgf</h1>
        <div className="form card-prod">
          <div className="card-container">
            <h2>Productos</h2>
            <p>Ver y agregar prodcutos</p>
            <button onClick={() => handleNavigate('/productos')}>Ver o Agregar</button>
          </div>
        </div>
        <div className="form card-pre">
          <div className="card-container">
            <h2>Hacer presupuestos</h2>
            <p>Crear presupuestos</p>
            <button onClick={() => handleNavigate('/presupuestos')}>Crear</button>
          </div>
        </div>
        <div className="form card-preh">
          <div className="card-container">
            <h2>Historial de presupuestos</h2>
            <p>Ver historial de presupuestos</p>
            <button onClick={() => handleNavigate('/historial')}>Ver</button>
          </div>
        </div>
        <div className="form card-preh">
          <div className="card-container">
            <h2>Clientes</h2>
            <p>Ver clientes</p>
            <button onClick={() => handleNavigate('/clientes')}>Ver</button>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}