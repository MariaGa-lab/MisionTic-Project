import React from 'react';
import Menu from '../components/Menu';
import Search from '../components/Search';

import CreateProduct from '../components/products/CreateProduct';
import EditProduct from '../components/products/EditProduct';
import ProductsList from '../components/products/ProductsList';

import CreateSale from '../components/sales/CreateSale';
import EditSale from '../components/sales/EditSale';
import SalesList from '../components/sales/SalesList';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../components/components.css'

function Ventanas(props) {
  return (
    <div className="ventanas-container">
      <Router>
        <div className="row">
          <div className="col-4">
            <Menu objetos={props.objeto} />
          </div>
          <div className="col-8">
            <Switch>
              <Route path={"/" + props.objeto + "/buscar"}>
                {(props.objeto === "ventas" && <Search title={"Búsqueda " + props.objeto} busqueda1="Código de venta" busqueda2="Documento cliente" busqueda3="Nombre cliente" />) ||
                  (props.objeto === "productos" && <Search title={"Búsqueda " + props.objeto} busqueda1="Código de producto" busqueda2="Nombre Producto" busqueda3="Descripción de producto" />)}
              </Route>
              <Route path={"/" + props.objeto + "/registrar"}>
                {(props.objeto === "ventas" && <CreateSale />) || (props.objeto === "productos" && <CreateProduct />)}
              </Route>
              <Route path={"/" + props.objeto + "/editar/:id"}>
                {(props.objeto === "ventas" && <EditSale />) || (props.objeto === "productos" && <EditProduct />)}
              </Route>
              <Route path={"/" + props.objeto}>
                {(props.objeto === "ventas" && <SalesList />) || (props.objeto === "productos" && <ProductsList />)}
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Ventanas;
