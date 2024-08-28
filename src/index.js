import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home.js';
import Cardapio from './pages/cardapio/Cardapio.js';
import Lojas from './pages/loja/Lojas';
import FaleConosco from './pages/fale-conosco/FaleConosco.js';
import Fidelidade from './pages/fidelidade/Fidelidade.js';
import Reserva from './pages/reserva/Reserva.js';

const router = createBrowserRouter([
  { path:"/", 
    element: <App/>,
    children: [
      { path:"/", element: <Home/> },
      { path:"cardapio", element: <Cardapio/> },
      { path:"lojas", element: <Lojas/> },
      { path:"fidelidade", element: <Fidelidade/> },
      { path:"faleconosco", element: <FaleConosco/> },
      { path:"reserva", element: <Reserva/> },
  ] },  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />         
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
