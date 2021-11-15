import React, { useState, Fragment }  from 'react' 
import { addSale } from '../../services/SalesService';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function CreateSale(props) {
  const { user, isAuthenticated } = useAuth0();
  const [sale, guardarSale] = useState({
    codProduct: '',
    price: '',
    quantity: '',
    nameCustomer: '',
    idCustomer: '',
    idSeller: '',
    saleDate: '',
    totalPrice: '',
  });

  const { codProduct, price, quantity, nameCustomer, idCustomer, idSeller, saleDate, totalPrice} = sale;
  let history = useHistory();

  const agregarVenta = () => {
    addSale(sale);
    alert("Se ha agregado una venta");
    history.push('/ventas');
  }

  // Leer los datos del formulario
  const leerInformacionSale = e => {
      guardarSale({
          // Obtener una copia del state y agregar el nuevo
          ...sale,
          [e.target.name]: e.target.value
      })
  }
  return (
    isAuthenticated && (
    <Fragment>
    <div>
      <div className="container">
        <div className="card">
          <h5 className="card-header">Registrar nueva venta</h5>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col">
                  <label>Código producto</label>
                  <input type="text" className="form-control" placeholder="000" 
                    onChange={(e) => leerInformacionSale(e)} name="codProduct" value={codProduct} />
                </div>
                <div className="col">
                  <label >Cantidad producto</label>
                  <input type="text" className="form-control" placeholder="1" 
                    onChange={(e) => leerInformacionSale(e)} name="quantity" value={quantity} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Precio producto (Unitario)</label>
                  <input type="text" className="form-control" placeholder="1000" 
                    onChange={(e) => leerInformacionSale(e)} name="price" value={price} />
                </div>
                <div className="col">
                  <label>Documento cliente</label>
                  <input type="text" className="form-control" 
                   onChange={(e) => leerInformacionSale(e)} name="idCustomer" value={idCustomer} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Nombre cliente</label>
                  <input type="text" className="form-control" 
                    onChange={(e) => leerInformacionSale(e)} name="nameCustomer" value={nameCustomer} />
                </div>
                <div className="col">
                  <label>Vendedor</label>
                  <input type="text" className="form-control" 
                    onChange={(e) => leerInformacionSale(e)} name="idSeller" value={idSeller} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Fecha</label>
                  <input type="date" className="form-control"
                    onChange={(e) => leerInformacionSale(e)} name="saleDate" value={saleDate} />
                </div>
                <div className="col">
                  <label>Valor total</label>
                  <input type="text" className="form-control" 
                   onChange={(e) => leerInformacionSale(e)} name="totalPrice" value={totalPrice} />
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  <br />
                  <button className="btn btn-primary" onClick={(e) => agregarVenta()}>Guardar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
    )
  );
}

export default CreateSale

