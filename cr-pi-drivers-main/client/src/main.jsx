import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Importa Provider
import store from './redux/store'; // Importa tu store de Redux

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Proporciona el store */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
