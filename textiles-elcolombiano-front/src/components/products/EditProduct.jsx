import React, {useState, useEffect, Fragment} from 'react';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';

function FormProducts(props) {

    // obtener el ID
    const { id } = props.match.params;

    // producto = state, y funcion para actualizar
    const [ producto, guardarProducto ] = useState({
        nombre: '',
        precio: '',
        descripcion : ''
    });


    // cuando el componente carga
    useEffect(() => {
         // consultar la api para traer el producto a editar
        const consultarAPI = async () => {
            const productoConsulta = await clienteAxios.get(`/productos/${id}`);
            guardarProducto(productoConsulta.data);
        }

        consultarAPI();
    }, [])

    // Edita un Producto en la base de datos
    const editarProducto = async e => {
        e.preventDefault();

        // crear un formdata
        const formData = new FormData();
        formData.append('nombre', producto.nombre);
        formData.append('precio', producto.precio);
        formData.append('descripcion', producto.descripcion);

        // almacenarlo en la BD
        try {
            const res = await clienteAxios.put(`/productos/${id}`, formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            } );

            // Lanzar una alerta
            if(res.status === 200) {
                Swal.fire(
                    'Editado Correctamente',
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


    // extraer los valores del state
    const { nombre, precio, descripcion } = producto;
    
    return (
        <Fragment>
            <div className="container">
                <div className="card">
                    <h5 className="card-header">Modificar producto</h5>
                    <div className="card-body">
                        <form onSubmit={editarProducto}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" onChange={leerInformacionProducto}
                        defaultValue={nombre}> Nombre producto </label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" onChange={leerInformacionProducto}
                        defaultValue={precio}>Valor unidad</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label className="form-label" onChange={leerInformacionProducto}
                        defaultValue={descripcion}>Descripcion producto</label>
                                    <input type="textarea" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label" onChange={leerInformacionProducto}>Disponible</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FormProducts
