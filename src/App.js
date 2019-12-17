import React from 'react';
import logo from './logo.svg';
import Producto from './componentes/producto';
import './App.css';

function App() {
  return (  
    <div>
      <p>Mostrando productos</p>
      <Producto/>
      <Producto/>
      <Producto/>
    </div>
  );
};

export default App;
