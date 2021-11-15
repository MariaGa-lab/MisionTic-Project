import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Search(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h5>{props.title}</h5>
            </div>
            <div className="card-body">
              <form id="boton">
                <div className="row">
                  <div className="col">
                    <label>Palabra de búsqueda</label>
                    <input
                      type="codigoproducto"
                      className="form-control"
                      placeholder="000"
                    ></input>
                  </div>
                  <div className="col">
                    <div className="form">
                      <div className="col">
                        <label>Búsqueda por</label>
                        <select
                          className="form-select"
                          id="inlineFormCustomSelect"
                        >
                          <option selected>{props.busqueda1}</option>
                          <option>{props.busqueda2}</option>
                          <option>{props.busqueda3}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="text-center" id="elemento">
                  <button className="btn btn-primary"> Buscar </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Search;
