import React, { useState, useEffect, Fragment } from 'react';
import { editProduct, getProduct } from '../../services/ProductService';
import { useHistory, useParams } from 'react-router-dom';

function EditProduct() {

    const [producto, guardarProducto] = useState({
        nameProduct: '',
        price: '',
        description: '',
        state: ''
    });

    // extraer los valores del state
    const { nameProduct, price, description, state } = producto;

    let history = useHistory();

    // Obtener el ID
    const { id } = useParams();

    // Edita un Producto en la base de datos
    const editarProducto = () => {
        editProduct(producto);
        alert("El producto se ha modificado correctamente");
        history.push("/productos");
    };

    // Cuando el componente carga
    useEffect(() => {
        consultarAPI(id)
    }, []);

    // Consultar la api para traer el producto a editar
    const consultarAPI = async () => {
        let response = await getProduct(id);
        guardarProducto(response.data.data);
    }

    // Leer los datos del formulario
    const leerInformacionProducto = (e) => {
        guardarProducto({ ...producto, [e.target.name]: e.target.value });
    }

    return (
        <Fragment>
            <div className="container">
                <div className="card">
                    <h5 className="card-header">Modificar producto</h5>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" > Nombre producto </label>
                                    <input onChange={(e) => leerInformacionProducto(e)} name="nameProduct" value={nameProduct}
                                        type="text" className="form-control" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Valor unidad</label>
                                    <input onChange={(e) => leerInformacionProducto(e)} name="price" value={price}
                                        type="text"
                                        className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label className="form-label">Descripcion producto</label>
                                    <input onChange={(e) => leerInformacionProducto(e)} name="description" value={description}
                                        type="textarea" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3 form-check">
                                    <label className="form-check-label">Disponible</label>
                                    <select className="custom-select" id="formUsuarioEstado"
                                        onChange={(e) => leerInformacionProducto(e)} value={state} name="state" required>
                                        <option value='true'>Disponible</option>
                                        <option value='false'>No disponible</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={() => editarProducto()} >Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditProduct
