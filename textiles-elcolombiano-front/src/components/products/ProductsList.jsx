import React from 'react';
import { Link } from 'react-router-dom';

function TableProducts() {
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
                        <tr>
                            <td>001</td>
                            <td>Buzo</td>
                            <td>Buzo con capota, unicolor</td>
                            <td>42900</td>
                            <td>Disponible</td>
                            <td className="text-center">
                                <Link to={`/productos/editar/${1}`} className="link">
                                    <button className="btn btn-success btn-sm" href="#!">Modificar</button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableProducts
