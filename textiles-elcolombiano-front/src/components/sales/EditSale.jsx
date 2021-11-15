import React, { useState, useEffect, Fragment } from 'react';
import { editSale, getSale } from '../../services/SalesService';
import { useHistory, useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function EditSale() {
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

   // extraer los valores del state
   const { codProduct, price, quantity, nameCustomer, idCustomer, idSeller, saleDate, totalPrice} = sale;

   let history = useHistory();

 // Obtener el ID
 const { id } = useParams();
 
// Edita un Venta en la base de datos
    const editarSale = () => {
        editSale(sale);
        alert("La venta se ha modificado correctamente");
        history.push("/sales");
    };

     // Cuando el componente carga
     useEffect(() => {
      consultarAPI(id)
  }, []);

// Consultar la api para traer el venta a editar
    const consultarAPI = async () => {
        let response = await getSale(id);
        guardarSale(response.data.data);

      }

      // Leer los datos del formulario
      const leerInformacionSale = (e) => {
          guardarSale({ ...sale, [e.target.name]: e.target.value });
      }
  
  return (
    isAuthenticated && (
    <Fragment>
       <div className="container">
        <div className="card">
          <h5 className="card-header">Modificar venta</h5>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col">
                  <label>Código producto</label>
                  <input onChange={(e) => leerInformacionSale(e)} name="codProduct" value={codProduct}
                                        type="text" className="form-control" />
                </div>
                <div className="col">
                  <label >Cantidad producto</label>
                  <input onChange={(e) => leerInformacionSale(e)} name="quantity" value={quantity}
                                        type="text" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Precio producto (Unitario)</label>
                  <input onChange={(e) => leerInformacionSale(e)} name="price" value={price}
                                        type="text" className="form-control" />
                </div>
                <div className="col">
                  <label>Documento cliente</label>
                  <input onChange={(e) => leerInformacionSale(e)} name="idCustomer" value={idCustomer}
                                        type="text" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Nombre cliente</label>
                  <input onChange={(e) => leerInformacionSale(e)} name="nameCustomer" value={nameCustomer}
                                        type="text" className="form-control" />
                </div>
                <div className="col">
                  <label>Vendedor</label>
                  <input onChange={(e) => leerInformacionSale(e)} name="idSeller" value={idSeller}
                                        type="text" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Fecha</label>
                  <input onChange={(e) => leerInformacionSale(e)} name="saleDate" value={saleDate}
                                        type="text" className="form-control" />
                </div>
                <div className="col">
                  <label>Valor total</label>
                  <input onChange={(e) => leerInformacionSale(e)} name="totalPrice" value={totalPrice}
                                        type="text" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  <br />
                  <button type="submit" className="btn btn-primary" onClick={() => editarSale()} >Guardar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  </Fragment>
  )
  );
}

export default EditSale
