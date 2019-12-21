import React from 'react';
import {Card, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import './producto.css';
import FichaProducto from './FichaProducto';

//function Producto(props) {
class Producto extends React.Component {
    render(){
        return (
            <Col sm="4" className="card-deck">
                <Card className="Card" body outline color="primary">  
                    <CardImg src={this.props.imagen}></CardImg>
                    <CardBody>
                        <CardTitle className="text-center text-danger">{this.props.titulo}</CardTitle>
                        <CardSubtitle><b>Precio:</b> {this.props.precio} CLP</CardSubtitle>
                        <CardText className="text-justify"><b>Descripción:</b> {this.props.descripcion}</CardText>
                        <CardText>Stock: {this.props.stock} unidades</CardText>
                        <FichaProducto props={this.props} className="Button"></FichaProducto>
                    </CardBody>
                </Card>
            </Col>
        );
    };
};

export default Producto;