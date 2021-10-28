import React from "react";

function EditUser() {
  return (
    <div>
      <div className="container">
        <div className="card">
          <h5 className="card-header">Modificar usuario</h5>
          <div className="card-body">
            <form>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="formUsuarioNombre">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formUsuarioNombre"
                    value=""
                    readonly
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="formUsuarioEmail">Correo Electrónico</label>
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
                  <label for="formUsuarioRol">Rol</label>
                  <select className="custom-select" id="formUsuarioRol" required>
                    <option selected>Seleccione un rol</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Vendedor">Vendedor</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="formUsuarioEstado">Estado</label>
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
                <button className="btn btn-primary" type="submit">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
