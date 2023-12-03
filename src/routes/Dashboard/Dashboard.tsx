import { Link, useNavigate } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import imgPro from "../../assets/imgPro.png";
import price from "../../assets/price.png";
import historial from "../../assets/historial.png";
import clientes from "../../assets/clientes.png";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <DashboardLayout>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={imgPro} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Productos</h5>
                <p className="card-text">
                  Ingresa aqui para ver y agregar productos
                </p>
                <Link to="/productos"  className="float btn btn-primary btn-lg">
                  Ingresar
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={price} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Ingrese a presupuestos</h5>
                <p className="card-text">
                  Ingresa aqui para ver y agregar productos
                </p>
                <Link to="/presupuestos"  className="float btn btn-primary btn-lg">
                  Ingresar
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={historial} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Historial de presupuestos</h5>
                <p className="card-text">
                  Ingresa aqui para ver y agregar productos
                </p>
                <Link to="/historial"  className="float btn btn-primary btn-lg">
                  Ingresar
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={clientes} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Clientes</h5>
                <p className="card-text">
                  Ingresa aqui para ver y agregar productos
                </p>
                <Link to="/clientes"  className="float btn btn-primary btn-lg">
                  Ingresar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}