import React from 'react';
import {Card, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import './producto.css';
import FichaProducto from './FichaProducto';

//function Producto(props) {
class Producto extends React.Component {
    render(){
        return (
            <Col sm="4">
                <Card className="Card" body outline color="primary">  
                    <CardImg src={this.props.imagen}></CardImg>
                    <CardBody>
                        <CardTitle className="centrado"><b>{this.props.titulo}</b></CardTitle>
                        <CardSubtitle><b>Precio:</b> {this.props.precio}</CardSubtitle>
                        <CardText className="justificado"><b>Descripción:</b> {this.props.descripcion}</CardText>
                        <CardText><b>Stock:</b> {this.props.stock}</CardText>
                        <FichaProducto props={this.props} className="Button"></FichaProducto>
                    </CardBody>
                </Card>
            </Col>
        );
    };
};

export default Producto;