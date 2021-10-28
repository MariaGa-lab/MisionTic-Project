import React from "react";
import { Link } from 'react-router-dom';

function UsersList() {
  return (
    <div>
      <div className="container">
        <h5 className="card-header">Usuarios</h5>
        <table id="usuarios" className="table table-hover table-sm">
          <thead className="p-3 text-center">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Correo Electrónico</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Firulais</td>
              <td>Firulais007@gmail.com</td>
              <td>Vendedor</td>
              <td>Autorizado</td>
              <td className="text-center">
                <Link to={`/usuarios/editar/${1}`} className="link">
                  <button className="btn btn-success btn-sm" href="#!">Modificar</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;
