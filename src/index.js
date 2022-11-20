import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-oyn8g3ca75rqunvr.us.auth0.com"
    clientId="BQJIePLhYPpADVKWpmmVElImIRlrpjKm"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);


