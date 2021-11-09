import React, { useState, useEffect, Fragment } from 'react';
import { editProduct, getProduct } from '../../services/ProductService';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function EditProduct(props) {

    // producto = state, y funcion para actualizar
    const [producto, guardarProducto] = useState({
        nameProduct: '',
        price: '',
        description: '',
        state: false
    });

    // extraer los valores del state
    const { nameProduct, price, description, state } = producto;
    let history = useHistory();

    // obtener el ID
    const { id } = useParams();

//     // consultar la api para traer el producto a editar
//     const consultarAPI = id => {
//         getProduct(id)
//             .then(response => {
//                 guardarProducto(response.data);
//                 console.log(response.data);
//             })
//             .catch(e => {
//                 console.log(e);
//             });
//     }

//     // cuando el componente carga
//     useEffect(() => {
//         consultarAPI(id);
//     }, [id])

//     // leer los datos del formulario
//     const leerInformacionProducto = (e) => {
//         guardarProducto({
//             // obtener una copia del state y agregar el nuevo
//             ...producto,
//             [e.target.name]: e.target.value
//         });
//     }

//     // Edita un Producto en la base de datos
//     const editarEstado = estado => {
//         var p = {
//             id: producto._id,
//             nameProduct: producto.nameProduct,
//             price: producto.price,
//             description: producto.description,
//             state: estado
//         };

//         editProduct(producto._id, p).then(response => {
//                 guardarProducto({ ...producto, state: estado });
//                 console.log(response.data);
//             })
//             .catch(e => {
//                     console.log(e);
//             });
//     };

//     const editarProducto = () => {
//         editProduct(producto).then(response => {
//             console.log(response.data);
//         })
//         .catch(e => {
//             console.log(e);
//         });
//         history.push('/productos');
//     };

    useEffect(() => {
        loadProductData();
    }, [])

    const loadProductData = async () => {
        let response = await getProduct(id);
        guardarProducto(response.data.data);
    }

    const leerInformacionProducto = (e) => {
        guardarProducto({ ...producto, [e.target.name]: e.target.value });
    }

    const editarEstado = (state) => {
        guardarProducto({ ...producto, "estado": state });
    }

    const editarProducto = async () => {
        await editProduct(producto);
        history.push('/productos');
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
