import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="964542278543-1sn5qr4emji77s6e15hq1vvvvgr8g9rc.apps.googleusercontent.com">;
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
