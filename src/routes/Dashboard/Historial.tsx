import React, { useState, useEffect } from 'react';
import Layout from "../../layout/Layout";

interface Presupuesto {
  id: number;
  creationDate: Date;
  total: number;
  clientId: string;
  userId: string;
  description: string;
  name: string;
}

export default function Historial() {
  const [presupuestos, setPresupuestos] = useState<Presupuesto[]>([]);

  useEffect(() => {
    // Lógica para cargar la lista de presupuestos desde tu backend
    // Aquí deberías hacer una llamada a tu API para obtener los presupuestos
    // y actualizar el estado de 'presupuestos' con los resultados
    const fetchPresupuestos = async () => {
      try {
        const response = await fetch('/api/presupuestos'); // Reemplaza esto con tu endpoint real
        const data = await response.json();
        setPresupuestos(data);
      } catch (error) {
        console.error('Error al cargar presupuestos:', error);
      }
    };

    fetchPresupuestos();
  }, []);

  const handlePresupuestoClick = (id: number) => {
    // Aquí podrías redirigir al usuario a una página de detalles del presupuesto
    // o mostrar más detalles en un modal, dependiendo de tu aplicación
    console.log(`Presupuesto seleccionado: ${id}`);
  };

  return (
    <>
      <Layout>
        <div className="form container mt-4">
          <h2 className=''>Historial</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha de Creación</th>
                <th>Total</th>
                {/* Agrega más encabezados según sea necesario */}
              </tr>
            </thead>
            <tbody>
              {presupuestos.map((presupuesto) => (
                <tr
                  key={presupuesto.id}
                  onClick={() => handlePresupuestoClick(presupuesto.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <td>{presupuesto.id}</td>
                  <td>{presupuesto.creationDate.toString()}</td>
                  <td>{presupuesto.total}</td>
                  {/* Agrega más celdas según sea necesario */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}