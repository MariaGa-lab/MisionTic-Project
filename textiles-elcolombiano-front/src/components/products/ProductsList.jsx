import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from '../../services/ProductService';

function ProductsList() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = async () => {
        let response = await getProducts();
        setProducts(response.data.data);
    }

    const deleteProductData = async (id) => {
        let callbackUser = window.confirm('¿Estás seguro de eliminar el producto?');
        if (callbackUser) {
            await deleteProduct(id);
            getAllProducts();
        }
    }

    return (
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
                            products.map(product => {
                                return (
                                    <tr key={product._id}>
                                        <td>{product._id}</td>
                                        <td>{product.nameProduct}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td>{product.state === true ? 'Disponible': 'No disponible'}</td>
                                        <td className="text-center">
                                            <Link to={`/productos/editar/${product._id}`} className="link">
                                                <button className="btn btn-success btn-sm" href="#!" >Modificar</button>
                                            </Link>
                                            | 
                                            <button className="btn btn-danger btn-sm" href="#!" onClick={() => deleteProductData(product._id)}>Eliminar</button>
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
}

export default ProductsList
