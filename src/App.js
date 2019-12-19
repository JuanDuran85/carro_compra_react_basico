import React from 'react';
import Producto from './componentes/producto';
import {Row, Container} from 'reactstrap';
import Navegacion from './componentes/Navegacion';
import './App.css';
import {listaProductos} from './listaProductos.json';

//console.log(listaProductos);
//function App() {
class App extends React.Component {
  //se realiza el constructor antes del render
  constructor(){
    //metodo super
    super();

    //estado del componente
    this.state = {
      listaProductos
    };
  };
  render(){
    const arregloComponente = this.state.listaProductos.map(
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
        );
      }
    );
    return (
      <Container>
        <Navegacion titulo="Carro de compra con ReactJS"/>
          <Row>
            {arregloComponente}
          </Row>
      </Container>
    );
  };
};

export default App;
