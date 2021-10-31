import { useState, useEffect } from 'react';
import { getUsers } from '../../services/UsersService';
import { Link } from 'react-router-dom';


export function UsersList() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers();

  }, [])

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data.data);
  }

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
            {
              users.map(user => {
                return (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.state}</td>
                    <td className="text-center">
                      <Link to={`/usuarios/editar/${user._id}`} className="link">
                        <button className="btn btn-success btn-sm" href="#!">Modificar</button>
                      </Link>
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
}
