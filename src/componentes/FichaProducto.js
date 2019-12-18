//iniciamos importando react
import React from 'react';
import {CardImg, Button, Container, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import './producto.css';
import {listaCarro} from '../listaCarro.json';

class FichaProducto extends React.Component {
    constructor (props) {
        super();
        this.state = {
            modal:false,
            listaCarro
        };
        this.toggle = this.toggle.bind(this);
        this.agregarAlCarro = this.agregarAlCarro.bind(this);
    };

    toggle(){
        console.log(this.props.props);
        this.setState(prevState => ({
            modal:!prevState.modal
        }));
    };

    agregarAlCarro () {
        listaCarro.push({
            "titulo":this.props.props.titulo,
            "precio":this.props.props.precio
        });
        this.setState(prevState => ({
            modal:!prevState.modal
        }));
        console.log(listaCarro);
    };

    render(){
        return (
            <Container>
                <Button onClick={this.toggle}>Ver Ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}></CardImg>
                        <p>Descripción del producto: {this.props.props.descripcion}.</p>
                        <p>Precio: USD{this.props.props.precio}</p>
                        <p>Stock: {this.props.props.stock}</p>
                    </ModalBody>
                    <ModalFooter className="ModalFooter">
                        <Button color="primary" onClick={this.agregarAlCarro}>Comprar</Button>
                        <Button color="secondary" onClick={this.toggle}>Regresar</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    };
};

export default FichaProducto;