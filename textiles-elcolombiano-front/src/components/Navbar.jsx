import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import './components.css'
import React, { useState, useEffect } from 'react'
import { getCurrentUser } from '../services/AuthService';

const initialValue = {
  email: ""
}

function Navbar() {

  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const [user, setUser] = useState(initialValue);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="link">
                <a className="nav-link" href="#!">Inicio</a>
              </Link>
            </li>
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
        <div>
          <button className="btn btn-outline-info nav-link"
            onClick={() => loginWithRedirect()}>Login</button>
        </div>
        <div>
          <button className="btn btn-outline-info nav-link"
            onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
