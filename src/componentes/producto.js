import React from 'react';
import {Card, Container, Row, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
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
                        <CardTitle>{this.props.titulo}</CardTitle>
                        <CardSubtitle><b>Precio:</b> {this.props.precio}</CardSubtitle>
                        <CardText>{this.props.descripcion}</CardText>
                        <CardText>Stock: {this.props.stock}</CardText>
                        <FichaProducto props={this.props} className="Button"></FichaProducto>
                    </CardBody>
                </Card>
            </Col>
        );
    };
};

export default Producto;