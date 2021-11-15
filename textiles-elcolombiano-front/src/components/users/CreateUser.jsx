import React, { useState, Fragment } from 'react';
import { getUser, createUser } from '../../services/UsersService';
import { useHistory } from 'react-router-dom';

function CreateUser() {

    const [cliente, guardarCliente] = useState({
        fullName: '',
        email: '',
        role: '',
        state: ''
    });

    const { fullName, email, role, state } = cliente;

    let history = useHistory();

    const crearCliente = () => {
        createUser(cliente);
        alert("El usuario se ha ingresado correctamente");
        history.push('/');
    }

    // Leer los datos del formulario
    const leerDatos = e => {
        guardarCliente({
            // Obtener una copia del state y agregar el nuevo
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Fragment>
            <div>
                <div className="container">
                    <div className="card">
                        <h5 className="card-header">Registrar nuevo usuario</h5>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Nombre usuario</label>
                                        <input type="text" className="form-control"
                                            onChange={(e) => leerDatos(e)} name="fullName" value={fullName} required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Correo Electrónico</label>
                                        <input type="email" className="form-control"
                                            onChange={(e) => leerDatos(e)} name="email" value={email} required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="formUsuarioRol" >Rol</label>
                                        <select className="form-select" id="formUsuarioRol"
                                            onChange={(e) => leerDatos(e)} value={role} name="role" required>
                                            <option selected>Seleccione un rol</option>
                                            <option value="Administrador">Administrador</option>
                                            <option value="Vendedor">Vendedor</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="formUsuarioEstado">Estado</label>
                                        <select className="form-select" id="formUsuarioEstado"
                                            onChange={(e) => leerDatos(e)} value={state} name="state" required>
                                            <option selected>Seleccione un estado</option>
                                            <option value="Pendiente">Pendiente</option>
                                            <option value="Autorizado">Autorizado</option>
                                            <option value="No autorizado">No autorizado</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={(e) => crearCliente()}>Guardar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CreateUser;
