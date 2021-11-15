import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { getUser, createUser } from '../services/UsersService';
import logoHome from '../app/images/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg'

export function Home() {
 
    const { user, isAuthenticated } = useAuth0();

    return (
        <div>
            {isAuthenticated && (
               <div></div> 
            )}
            <div>
                <h1> Bienvenido a nuestra plataforma virtual </h1>
                <p> elColombiano, somos 4 jovenes colombianos los que estamos a cargo</p>
                <img src={logoHome} className="img-fluid" alt={"logo"} width="600" height="600" />
            </div>
        </div>
    )
};
