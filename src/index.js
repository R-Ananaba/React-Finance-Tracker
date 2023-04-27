import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { AuthContextProvider } from './context/AuthContext'; //8

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
