import React,{Component} from 'react';
import {Card, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import './producto.css';
import FichaProducto from './FichaProducto';

//function Producto(props) {
class Producto extends Component {
    constructor (props) {
        super();
        this.state = {
            stocksprod:null
        };
    };
    componentDidMount() {
        this.setState({stocksprod:this.props.stock})
    }
    
    cambiarStock=(cantidad,listaCarro)=>{
        // console.log(listaCarro)
        this.setState({stocksprod:cantidad})
        this.props.listaCarro(listaCarro)
    }

    render(){
        return (
            <Col sm="4" className="card-deck">
                <Card className="Card" body outline color="primary">  
                    <CardImg src={this.props.imagen}></CardImg>
                    <CardBody>
                        <CardTitle className="text-center text-danger">{this.props.titulo}</CardTitle>
                        <CardSubtitle><b>Precio:</b> {this.props.precio} CLP</CardSubtitle>
                        <CardText className="text-justify"><b>Descripción:</b> {this.props.descripcion}</CardText>
                        <CardText>Stock: {this.state.stocksprod} unidades</CardText>
                        <FichaProducto props={this.props} className="Button" reducirCantidad={(e,listaCarro)=>this.cambiarStock(e,listaCarro)}></FichaProducto>
                    </CardBody>
                </Card>
            </Col>
        );
    };
};

export default Producto;