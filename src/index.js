import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './Components/CommonContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AppProvider> 
  <App />
 </AppProvider>
  
   
);


