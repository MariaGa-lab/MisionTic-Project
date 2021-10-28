import React from 'react';
import { Link } from 'react-router-dom';

function SalesList() {
  return (
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
            <tr>
              <th>0001</th>
              <td>Buso</td>
              <td>1</td>
              <td>42000</td>
              <td>21/09/2021</td>
              <td>Pepita perez</td>
              <td>Fulanito</td>
              <td>42000</td>
              <td>
                <Link to={`/ventas/editar/${1}`} className="link">
                  <button className="btn btn-success btn-sm" href="#!">Modificar</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default SalesList
