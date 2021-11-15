import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { App } from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="gabrielamorera.us.auth0.com"
      clientId="gfodVaRZnPnrYAzlB6eZXZfNnSkclNnm"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
