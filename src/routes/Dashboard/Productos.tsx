import { PRODUCT_URL, URL_PRODUCTS } from "../../auth/constants";
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

interface ProductProps {
  products: Products[];
  deleteProduct: (id: number) => void;
}

export default function Productos({ deleteProduct }: ProductProps) {
  const [products, setProducts] = useState<Products[]>([]);
  const navigate = useNavigate();
  const auth = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`${PRODUCT_URL}${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const updateProducts = products.filter(products => products.id !== id);
        setProducts(updateProducts);
      } else {
        console.error('Error deleting product:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <input
          className="form-control me-2"
          type="text"
          aria-label="Search"
          placeholder="Buscar Producto"
          value={searchTerm}
          onChange={handleSearch}
        />
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button className="btnA btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                  <button className="btnA btn btn-primary">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutNav>
  );
}