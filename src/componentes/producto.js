import React from 'react';
import {Card, Container, Row, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import './producto.css';

function Producto(props) {  
    return (
        <Col sm="4">
            <Card className="Card" body outline color="primary">  
                <CardImg src={props.imagen}></CardImg>
                <CardBody>
                    <CardTitle>{props.titulo}</CardTitle>
                    <CardSubtitle><b>Precio:</b> {props.precio}</CardSubtitle>
                    <CardText>{props.descripcion}</CardText>
                    <Button className="Button">Comprar</Button>
                    <Button className="Button">Ver Ficha</Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Producto;