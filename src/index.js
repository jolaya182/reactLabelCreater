/**
 * title: index.jsx
 *
 * date: 3/2/2020
 *
 * author: javier olaya
 *
 * description: this main point of entrace for the application component aspect of the webpage
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
