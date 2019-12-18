//iniciamos importando react
import React from 'react';
import {CardImg, Button, Container, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import './producto.css';

class FichaProducto extends React.Component {
    constructor (props) {
        super();
        this.state = {
            modal:false
        };
        this.toggle = this.toggle.bind(this);
    };

    toggle(){
        console.log(this.props.props);
        this.setState(prevState => ({
            modal:!prevState.modal
        }));
    };

    render(){
        return (
            <Container>
                <Button onClick={this.toggle}>Ver Ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}></CardImg>
                        <p className="justificado"><b>Descripción del producto:</b> {this.props.props.descripcion}.</p>
                        <p><b>Precio:</b> {this.props.props.precio}</p>
                        <p>Solo quedan: <b>{this.props.props.stock}</b> unidades disponibles</p>
                    </ModalBody>
                    <ModalFooter className="ModalFooter">
                        <Button color="primary" onClick={this.toggle}>Comprar</Button>
                        <Button color="secondary" onClick={this.toggle}>Regresar</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    };
};

export default FichaProducto;