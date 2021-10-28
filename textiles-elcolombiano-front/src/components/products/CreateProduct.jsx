import React from 'react'

function FormProducts() {
    return (
        <div>
            <div className="container">
                <div className="card">
                    <h5 className="card-header">Registrar nuevo producto</h5>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Nombre producto</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Valor unidad</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label className="form-label">Descripcion producto</label>
                                    <input type="textarea" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label" >Disponible</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormProducts
