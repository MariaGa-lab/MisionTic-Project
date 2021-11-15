import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from '../../services/ProductService';
import { useAuth0 } from "@auth0/auth0-react";

function ProductsList() {
    const { user, isAuthenticated } = useAuth0();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        mostrarProductos();
    }, []);

    const mostrarProductos = async () => {
        let response = await getProducts();
        setProductos(response.data.data);
    };

    const borrarProductos = async (id) => {
        let callbackUser = window.confirm('¿Estás seguro de eliminar el producto?');
        if (callbackUser) {
            await deleteProduct(id);
            mostrarProductos();
        }
    };

    return (
        isAuthenticated && (
            <div>
                <div className="container">
                    <h5 className="card-header">Productos</h5>
                    <table id="productos" className="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Código de producto</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Valor unidad</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productos.map(producto => {
                                    return (
                                        <tr key={producto._id}>
                                            <td>{producto._id}</td>
                                            <td>{producto.nameProduct}</td>
                                            <td>{producto.description}</td>
                                            <td>{producto.price}</td>
                                            <td>{producto.state === true ? 'Disponible' : 'No disponible'}</td>
                                            <td className="text-center">
                                                <Link to={`/productos/editar/${producto._id}`} className="link">
                                                    <button className="btn btn-success btn-sm" href="#!" >Modificar</button>
                                                </Link>
                                                |
                                                <button className="btn btn-danger btn-sm" href="#!" onClick={() => borrarProductos(producto._id)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    );
};

export default ProductsList;