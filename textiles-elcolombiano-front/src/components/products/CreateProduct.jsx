import React, { useState, Fragment } from 'react';
import { addProduct } from '../../services/ProductService';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function CreateProduct() {
    const { user, isAuthenticated } = useAuth0();
    const [producto, guardarProducto] = useState({
        nameProduct: '',
        price: '',
        description: '',
        state: true
    });

    const { nameProduct, price, description, state } = producto;

    let history = useHistory();

    const agregarProducto = () => {
        addProduct(producto);
        alert("Se ha agregado un producto");
        history.push('/productos');
    }

    // Leer los datos del formulario
    const leerInformacionProducto = e => {
        guardarProducto({
            // Obtener una copia del state y agregar el nuevo
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    return (
        isAuthenticated && (
            <Fragment>
                <div>
                    <div className="container">
                        <div className="card">
                            <h5 className="card-header">Registrar nuevo producto</h5>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Nombre producto</label>
                                            <input type="text" className="form-control"
                                                onChange={(e) => leerInformacionProducto(e)} name="nameProduct" value={nameProduct} />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Valor unidad</label>
                                            <input type="text" className="form-control"
                                                onChange={(e) => leerInformacionProducto(e)} name="price" value={price} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                            <label className="form-label">Descripcion producto</label>
                                            <input type="textarea" className="form-control"
                                                onChange={(e) => leerInformacionProducto(e)} name="description" value={description} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mb-3 form-check">
                                            <label className="form-check-label">Disponibilidad</label>
                                            <select className="form-select" id="formUsuarioEstado"
                                                onChange={(e) => leerInformacionProducto(e)} value={state} name="state" required>
                                                <option value={true}>Disponible</option>
                                                <option value={false}>No disponible</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={(e) => agregarProducto()}>Guardar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    );
};

export default CreateProduct;
