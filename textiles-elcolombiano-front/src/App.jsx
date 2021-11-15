import React from 'react'
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from './components/NotFound';
import Ventanas from './pages/Ventanas';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

import UsersList from './components/users/UsersList';
import EditUser from './components/users/EditUser';
import CreateUser from './components/users/CreateUser';

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
          <Route exact path="/perfil" component={Profile} />
          <Route exact path="/registrarse" component={CreateUser} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};
