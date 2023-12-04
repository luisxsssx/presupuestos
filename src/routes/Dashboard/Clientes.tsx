import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import { URL_CUSTOMERS } from "../../auth/constants";
import Layout from "../../layout/Layout";
import Modal from "../Formularios/Modal";
import AddClient from "../Formularios/AddClient";

interface Customers {
  id: number;
  name: string; // Asegúrate de usar minúsculas en "string"
  email: string;
  phone: string;
}

interface CustomersProps {
  customers: Customers[];
}

export default function Clientes() {
  const [customers, setCustomers] = useState<Customers[]>([]);
  const navigate = useNavigate();
  const auth = useAuth(); // Invoca el hook useAuth para obtener el contexto de autenticación
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCustomers = customers.filter((customers) =>
    customers.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowModal = () => {
    console.log("Modal abierto");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Modal cerrado");
    setModalOpen(false);
  };

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
        <div className="bt">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={handleShowModal}
          >
            Agregar Cliente
          </button>
          <Modal onClose={handleCloseModal} show={isModalOpen}>
            <AddClient onClose={handleCloseModal} />
          </Modal>
          <input
            className="form-control me-2"
            type="text"
            aria-label="Search"
            placeholder="Buscar Cliente"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="table-container table-responsive">
          <h2 className="display-danger pr"></h2>
          <table className="table table-striped table-bordered table-responsive table-hover">
            <thead>
              <tr className="th">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((client) => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>
                    <button className="btnA btn btn-danger">Delete</button>
                    <button className="btnA btn btn-primary">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}