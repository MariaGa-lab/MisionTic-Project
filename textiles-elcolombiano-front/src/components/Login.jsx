import React from 'react';
import { useAuth0 } from "@auth0/auth0-react"
import { LoginButton } from "../LoginA";
import { LogoutButton } from "../Logout";
import { Profile } from "../Profile";

import '../App.css';


export function Login() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App container">
      <div className="card">
        <div className="card-body">
          <div>
            <b>Iniciar sesión</b>
            <h1> Bienvenido a textiles elColombiano </h1>
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

export default Login