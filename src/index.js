import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain="dev-5e63oglav40lz7i6.us.auth0.com"
    clientId="joiCQPLo5WeZRwwwoUWKEl0jIuHjvoHw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);
