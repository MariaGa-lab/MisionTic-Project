import React, { useState, useEffect, Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getUser, editUser } from '../../services/UsersService';

function EditUser() {

  // cliente = state, datosCliente = funcion para guardar el state
  const [cliente, datosCliente] = useState({
    fullName: '',
    email: '',
    role: '',
    state: ''
  });
  const { fullName, email, role, state } = cliente;
  let history = useHistory();

  // Obtener el ID
  const { id } = useParams();

  // Query a la API
  const consultarAPI = async () => {
    let clienteConsulta = await getUser(id);
    // colocar en el state
    datosCliente(clienteConsulta.data.data);
  };  

  // useEffect, cuando el componente carga
  useEffect(() => {
    consultarAPI(id);
  }, []);

  // leer los datos del formulario
  const actualizarState = (e) => {
    // Almacenar lo que el usuario escribe en el state
    datosCliente({
      // obtener una copia del state actual
      ...cliente,
      [e.target.name]: e.target.value
    });
  }

  // Envia una petición por axios para actualizar el cliente
  const actualizarCliente = () => {
    editUser(cliente);
    alert("El usuario se ha modificado correctamente");
    history.push('/usuarios');
  }

  // Validar el formulario
  const validarCliente = () => {
    // Destructuring
    const { fullName, email, role, state } = cliente;

    // revisar que las propiedades del state tengan contenido
    let valido = !fullName.length || !email.length || !role.length || !state.length;

    // return true o false
    return valido;
  }

  return (
    <Fragment>
      <div className="container">
        <div className="card">
          <h5 className="card-header">Modificar usuario</h5>
          <div className="card-body">
            <form onSubmit={actualizarCliente}>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="formUsuarioNombre" >Nombre</label>
                  <input onChange={(e) => actualizarState(e)} value={fullName} name="fullName"
                    type="text"
                    className="form-control"
                    id="formUsuarioNombre"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="formUsuarioEmail" >Correo Electrónico</label>
                  <input onChange={(e) => actualizarState(e)} value={email} name="email"
                    type="email"
                    className="form-control"
                    id="formUsuarioEmail"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="formUsuarioRol" >Rol</label>
                  <select className="custom-select" id="formUsuarioRol"
                    onChange={(e) => actualizarState(e)} value={role} name="role" required>
                    <option selected>Seleccione un rol</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Vendedor">Vendedor</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="formUsuarioEstado">Estado</label>
                  <select className="custom-select" id="formUsuarioEstado"
                    onChange={(e) => actualizarState(e)} value={state} name="state" required>
                    <option selected>Seleccione un estado</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Autorizado">Autorizado</option>
                    <option value="No autorizado">No autorizado</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="text-center">
                <button className="btn btn-primary" type="submit" disabled={validarCliente()} onClick={() => actualizarCliente()}>
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditUser;
