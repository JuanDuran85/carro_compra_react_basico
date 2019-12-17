import React from 'react';
import {Card, Container, Row, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';

function Producto() {  
    return (
        <Col sm="4">
            <Card>  
                <CardImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuwTY0GHRdftGkZAckqLemynHrfSMv_edXUAf5HXvKzKzrxzhC&s"></CardImg>
                <CardBody>
                    <CardTitle>Nombre del Producto</CardTitle>
                    <CardSubtitle><b>Precio del Producto</b>:  XXXXX</CardSubtitle>
                    <CardText>Descripcion del producto a vender</CardText>
                    <Button>Comprar</Button>
                    <Button>Ver Ficha</Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Producto;