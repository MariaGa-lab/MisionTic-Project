import React from 'react'
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import Ventanas from './pages/Ventanas';
import Navbar from './components/Navbar';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { NotFound } from './components/NotFound';

import UsersList from './components/users/UsersList';
import EditUser from './components/users/EditUser';



export function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <br />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ventas">
              <Ventanas objeto="ventas" />
          </Route>
          <Route path="/productos">
              <Ventanas objeto="productos" />
          </Route>
          <Route exact path="/usuarios" component={UsersList} />
          <Route exact path="/usuarios/editar/:id" component={EditUser} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
