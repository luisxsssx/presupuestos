import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import DashboardLayout from "../../layout/DashboardLayout";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Product {
  id: number;
  name: string;
  // ... otras propiedades del producto
}

interface FormState {
  creationDate: Date;
  total: number;
  clientId: string;
  userId: string;
  description: string;
  name: string;
  selectedProducts: Product[];
}

export default function Presupuestos() {
  const [formData, setFormData] = useState<FormState>({
    creationDate: new Date(),
    total: 0,
    clientId: '',
    userId: '',
    description: '',
    name: '',
    selectedProducts: [],
  });

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Lógica para cargar la lista de productos desde tu backend
    // Aquí deberías hacer una llamada a tu API para obtener los productos
    // y actualizar el estado de 'products' con los resultados
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products'); // Reemplaza esto con tu endpoint real
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (name: string, value: string | number | Date | Product[]) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Puedes agregar lógica adicional aquí, como enviar datos a tu backend
  };

  return (
    <>
      <DashboardLayout>
        <div className="form container mt-4">
          <h2>Crear Presupuesto</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Fecha de Creación:</label>
              <DatePicker
                className="form-control"
                selected={formData.creationDate}
                onChange={(date: Date) => handleInputChange('creationDate', date)}
                showTimeSelect
                dateFormat="Pp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Total:</label>
              <input
                type="number"
                className="form-control"
                name="total"
                value={formData.total}
                onChange={(e) => handleInputChange('total', Number(e.target.value))}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">ID del Cliente:</label>
              <input
                type="text"
                className="form-control"
                name="clientId"
                value={formData.clientId}
                onChange={(e) => handleInputChange('clientId', e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">ID del Usuario:</label>
              <input
                type="text"
                className="form-control"
                name="userId"
                value={formData.userId}
                onChange={(e) => handleInputChange('userId', e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción:</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Productos:</label>
              <select
                className="form-control"
                
              
                onChange={(e) => {
                  const selectedProductIds = Array.from(e.target.selectedOptions, option => parseInt(option.value));
                  const selectedProducts = products.filter(product => selectedProductIds.includes(product.id));
                  handleInputChange('selectedProducts', selectedProducts);
                }}
              >
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Guardar Presupuesto</button>
          </form>
        </div>
      </DashboardLayout>
    </>
  );
}
