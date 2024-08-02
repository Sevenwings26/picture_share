// import React from 'react';
// import ReactDOM from 'react-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import App from './App';
// import './index.css'

// const clientId = import.meta.env.VITE_REACT_APP_GOOGLE_API_TOKEN
// ReactDOM.render(
//   <GoogleOAuthProvider clientId={clientId}>
//     <App />
//   </GoogleOAuthProvider>,
//   document.getElementById('root')
// );


import React from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './index.css';

const clientId = import.meta.env.VITE_REACT_APP_GOOGLE_API_TOKEN;

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>
);
