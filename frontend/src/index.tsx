import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <Auth0Provider
            domain="dev-n4okh2r6.us.auth0.com"
            clientId="yr7EwnBqHz6eCF01ZND5DhVl0MNgNRcQ"
            redirectUri={window.location.origin}
        >
            <App/>
        </Auth0Provider>,
        </BrowserRouter>,
    document.getElementById('root')
);
