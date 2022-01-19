import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
        domain="dev-n4okh2r6.us.auth0.com"
        clientId="yr7EwnBqHz6eCF01ZND5DhVl0MNgNRcQ"
        redirectUri={window.location.origin}
        audience="itransition project"
        useRefreshTokens={true}
        cacheLocation="localstorage"
    >
        <App/>
    </Auth0Provider>,
    document.getElementById('root')
);
