import React from 'react';
import {Row, Container} from 'reactstrap';
import './App.css';
import Producto from './componentes/producto';
import Navegacion from './componentes/Navegacion';
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
      listaProductos:[],
      listaCarro:[]
    };
  };
  componentDidMount(){
    this.setState({listaProductos:listaProductos})
  }
  listaCarroVer=listaCarro=>{
    console.log(listaCarro)
    this.setState({listaCarro:listaCarro})
  }
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
              listaCarro={(e) => this.listaCarroVer(e)}
            />
        );
      }
    );
    return (
      <Container>
        <Navegacion titulo="Carro de compras con ReactJS" listaCarro={this.state.listaCarro}/>
          <Row>
            {arregloComponente}
          </Row>
      </Container>
    );
  };
};

export default App;
