import React, {useState, Fragment} from 'react';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';

function FormProducts() {

    //producto = state, guardarProducto = setstate
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
    });
    // archivo = state, guardarArchivo = setState
    const [guardarArchivo] = useState('');

    // almacena el nuevo producto en la base de datos.
    const agregarProducto = async e => {
        e.preventDefault();

        // crear un formdata
        const formData = new FormData();
        formData.append('nombre', producto.nombre);
        formData.append('precio', producto.precio);

        // almacenarlo en la BD
        try {
            const res = await clienteAxios.post('/productos', formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            } );

            // Lanzar una alerta
            if(res.status === 200) {
                Swal.fire(
                    'Agregado Correctamente',
                    res.data.mensaje,
                    'success'
                )
            }


        } catch (error) {
            console.log(error);
            // lanzar alerta
            Swal.fire({
                type:'error',
                title: 'Hubo un error',
                text: 'Vuelva a intentarlo'
            })
        }
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
                        <form onSubmit={agregarProducto}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Nombre producto</label>
                                    <input type="text" className="form-control" onChange={leerInformacionProducto}/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Valor unidad</label>
                                    <input type="text" className="form-control" onChange={leerInformacionProducto}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label className="form-label">Descripcion producto</label>
                                    <input type="textarea" className="form-control" onChange={leerInformacionProducto}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label" onChange={guardarArchivo}>Disponible</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default FormProducts
