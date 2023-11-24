import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import imgPro from "../../assets/imgPro.png";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <DashboardLayout>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img src={imgPro} className="card-img-top" alt="Descripción de la imagen" style={{ width: '50%', height: '10%', borderRadius: '8px', justifyContent: "center" }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button className="float" onClick={()=> handleNavigate("/productos")}>
            Ver o Agregar
          </button>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                 <button className="float" onClick={()=> handleNavigate("/presupuestos")}>
            Crear
          </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <button className="float" onClick={()=> handleNavigate("/historial")}>Ver</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <button className="float" onClick={()=> handleNavigate("/clientes")}>Ver</button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
