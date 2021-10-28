import React from "react";

function Alert() {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="card w-50">
            <h5 className="card-header text-white bg-primary">Usuarios</h5>
            <div className="card-body text-center">
              <h5 className="card-title">Registro Exitoso!</h5>
              <p className="card-text">
                Se ha modificado el usuario correctamente.
              </p>
              <button href="#" className="btn btn-outline-secondary">
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
