import React from 'react'
import {Link} from 'react-router-dom'
import './components.css'
function Navbar() {
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
        <form className="form-inline ">
          <Link to="/login" className="link">
            <button className="btn btn-outline-info nav-link" href="#!">Login</button>
          </Link>
        </form>
      </nav>
    </div>
  )
}

export default Navbar
