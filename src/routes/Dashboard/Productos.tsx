import { URL_PRODUCTS } from "../../auth/constants";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import LayoutNav from "../../layout/Layout";
import Modal from "../Formularios/Modal";
import AddProduct from "../Formularios/AddProduct";
import { useEffect, useState } from "react";

interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function Productos() {
  const [products, setProducts] = useState<Products[]>([]);
  const navigate = useNavigate();
  const auth = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleShowModal = () => {
    console.log("Modal abierto");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Modal cerrado");
    setModalOpen(false);
  };

  useEffect(() => {
    // Verificar si el usuario está autenticado
    if (!auth.isAuthenticated) {
      // Redirigir al dashboard si no está autenticado
      navigate("/dashboard");
    } else {
      // Fetch de productos solo si el usuario está autenticado
      fetch(URL_PRODUCTS)
        .then((response) => response.json())
        .then((data: Products[]) => setProducts(data));
    }
  }, [auth.isAuthenticated, navigate]);

  useEffect(() => {
    // Verificar si el usuario ha decidido salir al recargar la página
    const userDecidedToExit = localStorage.getItem("userDecidedToExit");
    if (userDecidedToExit) {
      // Limpiar la decisión almacenada para la próxima vez
      localStorage.removeItem("userDecidedToExit");
      navigate("/");
    } else {
      // Obtener el estado almacenado en localStorage
      const storedState = localStorage.getItem("productState");
      if (storedState) {
        setProducts(JSON.parse(storedState));
      } else {
        // Fetch de productos si no hay estado almacenado
        fetch(URL_PRODUCTS)
          .then((response) => response.json())
          .then((data: Products[]) => setProducts(data));
      }
    }
  }, [navigate]);

  useEffect(() => {
    // Almacenar el estado actual en localStorage
    localStorage.setItem("productState", JSON.stringify(products));
  }, [products]);

  return (
    <LayoutNav>
      <div className="bt">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={handleShowModal}
        >
          Agregar Producto
        </button>
        <Modal onClose={handleCloseModal} show={isModalOpen}>
          <AddProduct onClose={handleCloseModal} />
        </Modal>
      </div>
      <div className="table-container table_reponsive">
        <h2 className="display-danger pr">Productos</h2>
        <table className="table table-striped table-bordered table-responsive table-hover">
          <thead>
            <tr className="th">
              <th>ID</th>
              <th>Name Product</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutNav>
  );
}