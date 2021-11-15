import React from 'react'
import { Link } from 'react-router-dom'
import './components.css'
import { useAuth0 } from "@auth0/auth0-react";

function Menu(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    isAuthenticated && (
      <div className="list-group menu-container">
        <ul>
          <li className="list-group-item list-group-item-action">
            <Link to={"/" + props.objetos} className="link">
              Lista de {props.objetos}
            </Link>
          </li>
          <li className="list-group-item list-group-item-action">
            <Link to={"/" + props.objetos + "/registrar"} className="link">
              Registrar {props.objetos}
            </Link>
          </li>
          <li className="list-group-item list-group-item-action">
            <Link to={"/" + props.objetos + '/buscar'} className="link">
              Buscar {props.objetos}
            </Link>
          </li>
        </ul>
      </div>
    )
  );
};

export default Menu;
