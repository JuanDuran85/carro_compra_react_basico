//iniciamos importando react
import React from 'react';
import {CardImg, Button, Container, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import './producto.css';
import {listaCarro} from '../listaCarro.json';
import {listaProductos} from '../listaProductos.json';

class FichaProducto extends React.Component {
    constructor (props) {
        super();
        this.state = {
            modal:false,
            listaCarro:[],
            listaProductos:[],
            cantidadproductoreducido:null,
            stocks:null
        };
    };
    
    
    componentDidMount() {
        this.setState({listaCarro:listaCarro,listaProductos:listaProductos,stocks:this.props.props.stock})
        this.toggle = this.toggle.bind(this);
        this.agregarAlCarro = this.agregarAlCarro.bind(this);
        // console.log(this.props)
    }
    
    toggle(){
        //console.log(this.props.props);
        this.setState(prevState => ({
            modal:!prevState.modal,
        }));
    };

    agregarAlCarro (propsNew) {
        // console.log(propsNew)
        let valor = parseInt(this.state.stocks)-1;
        console.log(valor);
        listaCarro.push({
            "titulo":propsNew.titulo,
            "precio":propsNew.precio
        });

        this.setState(prevState => ({
            modal:!prevState.modal,
            stocks:parseInt(this.state.stocks)-1
        }));

        this.props.reducirCantidad(valor,listaCarro)
    };

    render(){
        return (
            <Container>
                <Button size="lg" onClick={this.toggle}>Ver Ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}></CardImg>
                        <p className="text-justify">Descripción del producto: {this.props.props.descripcion}.</p>
                        <p>Precio: {this.props.props.precio} pesos chilenos</p>
                        <p>Stock: {this.state.stocks} unidades</p>
                    </ModalBody>
                    <ModalFooter className="ModalFooter">
                        <Button color="primary" onClick={()=>this.agregarAlCarro(this.props.props)}>Comprar</Button>
                        <Button color="secondary" onClick={this.toggle}>Regresar</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    };
};

export default FichaProducto;