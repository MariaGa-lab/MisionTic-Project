import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import './components.css'
import React from 'react'

function Navbar() {

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="link">
            <a className="navbar-brand" href="#!">Inicio</a>
          </Link>
          {isAuthenticated && (
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/ventas" className="link">
                    <a className="nav-link" href="#!">Ventas</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/productos" className="link">
                    <a className="nav-link" href="#!">Productos</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/usuarios" className="link">
                    <a className="nav-link" href="#!">Usuarios</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {!isAuthenticated && (
            <div>
              <ul className="navbar-nav">
                <li className="nav-item me-1">
                  <Link to="/registrarse" className="link">
                    <button className="btn btn-outline-info">Registrarse</button>
                  </Link>
                </li>
                <li className="nav-item me-1">
                  <button className="btn btn-outline-info"
                    onClick={() => loginWithRedirect()}>Iniciar sesión</button>
                </li>
              </ul>
            </div>
          )}
          {isAuthenticated && (
            <div>
              <div className="collapse navbar-collapse">
                <span className="navbar-text ">
                  Bienvenido:
                </span>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <button className="btn btn-dark dropdown-toggle ms-1" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      {user.name}
                    </button >
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                      <li>
                        <Link to="/perfil" className="link">
                          <button className="dropdown-item" type="button">Perfil</button>
                        </Link>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button"
                          onClick={() => logout({ returnTo: window.location.origin })}>Salir</button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
