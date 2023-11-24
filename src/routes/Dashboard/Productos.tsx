import { useState, useEffect } from "react";
import { URL_PRODUCTS } from "../../auth/constants";


interface Products {
  id: number;
  name_product: string,
  description: string,
  price: number;
}

export default function Productos() {
  const [Products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch(URL_PRODUCTS)
      .then(response => response.json())
      .then((data: Products[]) => setProducts(data));
  }, []);

  return (
    <>
    <div className="table_reponsive">
      <h2 className="display-danger pr">Productos</h2>
      <table className="table table-striped table-bordered table-responsive" >
        <thead>
          <tr className="th">
            <th>ID</th>
            <th>Name Product</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Products.map(Products =>(
            <tr>
              <td>{Products.id}</td>
              <td>{Products.name_product}</td>
              <td>{Products.description}</td>
              <td>{Products.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}