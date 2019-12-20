import React from 'react';
import Producto from './componentes/producto';
import {Row, Container} from 'reactstrap';
import Navegacion from './componentes/Navegacion';
import './App.css';
import {listaProductos} from './listaProductos.json';

//console.log(listaProductos);
//function App() {
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      listaProductos
    };
  };
  render(){
    const productosCarro = this.state.listaProductos.map(
        (listaProductos,i) => {
            //console.log(i);
            return (
               <Producto
                  key={i} 
                  titulo={listaProductos.titulo}
                  imagen={listaProductos.imagen}
                  descripcion={listaProductos.descripcion}
                  precio={listaProductos.precio}
                  stock={listaProductos.stock}
                />
            )
        }  
    );
    return (
      <Container>
        <Navegacion titulo="Carro de compra con ReactJS"/>
          <Row>
              {productosCarro}
          </Row>
      </Container>
    );
  };
};

export default App;
