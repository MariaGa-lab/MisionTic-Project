import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSales, deleteSale } from '../../services/SalesService';
import { useAuth0 } from "@auth0/auth0-react";

function SalesList() {
  const { user, isAuthenticated } = useAuth0();
  const [sales, setSales] = useState([]);

  useEffect(() => {
      mostrarSales();
  },[]);

  const mostrarSales = async () => {
    let response = await getSales();
    setSales(response.data.data);
};

const borrarSales = async (id) => {
  let callbackUser = window.confirm('¿Estás seguro de eliminar la venta?');
  if (callbackUser) {
      await deleteSale(id);
      mostrarSales();
  }
};

  return (
    isAuthenticated && (
    <div>
      <div className="container">
        <h5 className="card-header">Ventas</h5>
        <table id="ventas" className="table table-hover table-sm">
          <thead className="p-3 text-center">
            <tr>
              <th scope="col">Código venta</th>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio unidad</th>
              <th scope="col">Fecha</th>
              <th scope="col">Cliente</th>
              <th scope="col">Vendedor</th>
              <th scope="col">Total venta</th>
              <th scope="col">Acciones </th>
            </tr>
          </thead>
          <tbody>
          {
            sales.map(sale => {
              return (
            <tr key={sale._id}>
              <th>{sale._id}</th>
              <td>{sale.codProduct}</td>
              <td>{sale.quantity}</td>
              <td>{sale.price}</td>
              <td>{sale.saleDate}</td>
              <td>{sale.nameCustomer}</td>
              <td>{sale.idSeller}</td>
              <td>{sale.totalPrice}</td>
              <td>
                <Link to={`/ventas/editar/${sale._id}`} className="link">
                  <button className="btn btn-success btn-sm" href="#!">Modificar</button>
                </Link>
                <button className="btn btn-danger btn-sm" href="#!" onClick={() => borrarSales(sale._id)}>Eliminar</button>
              </td>
            </tr>
             )
            })
        }
          </tbody>
        </table>
      </div>
    </div>
    )
  );
}

export default SalesList
