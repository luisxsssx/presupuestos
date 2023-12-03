import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import { URL_CUSTOMERS } from "../../auth/constants";
import Layout from "../../layout/Layout";
interface Customers {
  id: number;
  name: string; // Asegúrate de usar minúsculas en "string"
  email: string;
  phone: string;
}

export default function Clientes() {
  const [customers, setCustomers] = useState<Customers[]>([]);
  const navigate = useNavigate();
  const auth = useAuth(); // Invoca el hook useAuth para obtener el contexto de autenticación

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/client");
    } else {
      fetch(URL_CUSTOMERS)
        .then((response) => response.json())
        .then((data: Customers[]) => setCustomers(data));
    }
  }, [auth.isAuthenticated, navigate]);

  return (
    <>
      <Layout>
        <div className="table-responsive">
          <h2 className="display-danger pr"></h2>
          <table className="table table-striped table-bordered table-responsive table-hover">
            <thead>
              <tr className="th">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((client) => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}