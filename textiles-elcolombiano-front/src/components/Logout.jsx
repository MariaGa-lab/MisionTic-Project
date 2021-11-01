import React from 'react';
import { useAuth0 } from "@auth0/auth0-react"
import { LoginButton } from "../LoginA";
import { LogoutButton } from "../Logout";
import { Profile } from "../Profile";

import '../App.css';


export function Logout() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App container">
      <div className="card">
        <div className="card-body">
          <div>
            <b>Cerrar sesión</b>
            <h1> Gracias por haber visitado a textiles elColombiano </h1>
          </div>
          {isAuthenticated ? (
          <>
            < Profile />
            < LogoutButton />
          </>
          ) : (
             < LoginButton />
           )}
        </div>
      </div>
    </div>
  );
}

export default Logout