import React, {useState, useEffect, Fragment} from 'react';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios'

function EditUser(props) {

   // obtener el ID
   const { id } = props.match.params;

   // cliente = state, datosCliente = funcion para guardar el state
   const[cliente, datosCliente] = useState({
       nombre: '',
       email: '',
       rol :''
   });

   // Query a la API
   const consultarAPI = async () => {
       const clienteConsulta = await clienteAxios.get(`/clientes/${id}`);

      // colocar en el state
      datosCliente(clienteConsulta.data);
   }

   // useEffect, cuando el componente carga
   useEffect( () => {
       consultarAPI();
   }, []);

   // leer los datos del formulario
   const actualizarState = e => {
       // Almacenar lo que el usuario escribe en el state
       datosCliente({
           // obtener una copia del state actual
           ...cliente, 
           [e.target.name] : e.target.value
       })
   }

   // Envia una petición por axios para actualizar el cliente
   const actualizarCliente = e => {
       e.preventDefault();

       // enviar petición por axios
       clienteAxios.put(`/clientes/${cliente._id}`, cliente) 
           .then(res => {
               // validar si hay errores de mongo 
               if(res.data.code === 11000) {
                   Swal.fire({
                       type: 'error',
                       title: 'Hubo un error',
                       text: 'Ese cliente ya esta registrado'
                   })
               } else {
                   Swal.fire(
                       'Correcto',
                       'Se actualizó Correctamente',
                       'success'
                   )
               }

               // redireccionar
               props.history.push('/');
           })
   }

   // Validar el formulario
   const validarCliente = () => {
       // Destructuring
       const { nombre, email, rol, estado} = cliente;

       // revisar que las propiedades del state tengan contenido
       let valido = !nombre.length || !email.length || !rol.length || !estado.length;

       // return true o false
       return valido;
   }


  return (
    <Fragment>
      <div className="container">
        <div className="card">
          <h5 className="card-header">Modificar usuario</h5>
          <div className="card-body">
            <form  onSubmit={actualizarCliente}>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="formUsuarioNombre" onChange={actualizarState} value={cliente.nombre}>Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formUsuarioNombre"
                    value=""
                    readonly
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="formUsuarioEmail" onChange={actualizarState} value={cliente.email}>Correo Electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="formUsuarioEmail"
                    value=""
                    readonly
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="formUsuarioRol" onChange={actualizarState} value={cliente.rol}>Rol</label>
                  <select className="custom-select" id="formUsuarioRol" required>
                    <option selected>Seleccione un rol</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Vendedor">Vendedor</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="formUsuarioEstado" onChange={actualizarState} value={cliente.estado}>Estado</label>
                  <select className="custom-select" id="formUsuarioEstado" required>
                    <option selected>Seleccione un estado</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Autorizado">Autorizado</option>
                    <option value="No autorizado">No autorizado</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="text-center">
                <button className="btn btn-primary" type="submit" disabled={ validarCliente() }>
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
