import React, {useState, Fragment} from 'react';
import Swal from 'sweetalert2';
import { addProduct } from '../../services/ProductService';
import { useHistory } from 'react-router-dom';

function CreateProduct() {
    
    //producto = state, guardarProducto = setstate
    const [producto, guardarProducto] = useState({
        nameProduct: '',
        price: '',
        description: '',
        state: false
    });

    const { nameProduct, price, description, state } = producto;

    let history = useHistory();

    // almacena el nuevo producto en la base de datos.
    // const agregarProducto = async e => {
    //     e.preventDefault();

    //     // crear un formdata
    //     const formData = new FormData();
    //     formData.append('nameProduct', producto.nameProduct);
    //     formData.append('price', producto.price);
    //     formData.append('description', producto.description);
    //     formData.append('state', producto.state);

    //     // almacenarlo en la BD
    //     try {
    //         const res = await addProduct(formData);

    //         // Lanzar una alerta
    //         if(res.status === 200) {
    //             Swal.fire(
    //                 'Agregado Correctamente',
    //                 res.data.mensaje,
    //                 'success'
    //             )
    //         }
    //         history.push('/productos');

    //     } catch (error) {
    //         console.log(error);
    //         // lanzar alerta
    //         Swal.fire({
    //             type:'error',
    //             title: 'Hubo un error',
    //             text: 'Vuelva a intentarlo'
    //         })
    //     }
    // }

    const agregarProducto = async () => {
        await addProduct(producto);
        history.push('/productos');
    }

    // leer los datos del formulario
    const leerInformacionProducto = e => {
        guardarProducto({
            // obtener una copia del state y agregar el nuevo
            ...producto,
            [e.target.name] : e.target.value
        })
    }


    return (
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
                                    onChange={(e) => leerInformacionProducto(e)} name="nameProduct" value={nameProduct}/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Valor unidad</label>
                                    <input type="text" className="form-control"
                                    onChange={(e) => leerInformacionProducto(e)} name="price" value={price}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label className="form-label">Descripcion producto</label>
                                    <input type="textarea" className="form-control" 
                                    onChange={(e) => leerInformacionProducto(e)} name="description" value={description}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" 
                                     onChange={(e) => leerInformacionProducto(e)} name="state" value={state}/>
                                    <label className="form-check-label">Disponible</label>
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
}

export default CreateProduct
