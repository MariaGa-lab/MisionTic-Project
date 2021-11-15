import React from "react";
import logo from "../app/images/romson-preechawit-Vy2cHqm0mCs-unsplash.jpg";

export function NotFound() {
  return (
    <div>
      <h1>Página no encontrada 404.</h1>
      <img
        src={logo}
        className="img-fluid"
        alt={"logo"}
        width="600"
        height="600"
      />
    </div>
  );
}
