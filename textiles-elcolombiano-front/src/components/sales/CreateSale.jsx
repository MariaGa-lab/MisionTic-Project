import React from 'react'

function CreateSale(props) {
  return (
    <div>
      <div className="container">
        <div className="card">
          <h5 className="card-header">Registrar nueva venta</h5>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col">
                  <label>Código producto</label>
                  <input type="text" className="form-control" placeholder="000" />
                </div>
                <div className="col">
                  <label >Cantidad producto</label>
                  <input type="text" className="form-control" placeholder="1" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Precio producto (Unitario)</label>
                  <input type="text" className="form-control" placeholder="1000" />
                </div>
                <div className="col">
                  <label>Documento cliente</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Nombre cliente</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col">
                  <label>Vendedor</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Fecha</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col">
                  <label>Valor total</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  <br />
                  <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateSale
