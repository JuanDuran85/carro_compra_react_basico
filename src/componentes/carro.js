import React from 'react';
import {listaCarro} from '../listaCarro.json';
import {Table, Button, Badge, Popover, PopoverHeader, PopoverBody} from 'reactstrap';

class Carro extends React.Component{
    constructor(){
        super();
        this.state = {
            popoverOpen:false,
            listaCarro
        };
        this.toggle = this.toggle.bind(this);
    };

    toggle(){
        this.setState(prevState => ({
            popoverOpen:!prevState.popoverOpen
        }));
    };

    render(){
        let arreglo1 = [];
        let totalCarro = 0;
        const productosVenta = this.state.listaCarro.map(
            (listaCarro,i)=> {
                arreglo1.push(parseInt(listaCarro.precio));
                totalCarro = arreglo1.reduce((total,value) =>
                total+value,0
            );
                return(
                    <tr key={i}>
                        <td>{i+=1}</td>
                        <td>{listaCarro.titulo}</td>
                        <td>{listaCarro.precio}</td>
                    </tr>
                )
            }
        );

        return(
            <div>
                <Button id="Popover1" color="info">
                    <span><i className="material-icons">shopping_cart</i></span>
                    <Badge className="secundary">{productosVenta.length}</Badge>
                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                        <PopoverHeader>Lista de Productos</PopoverHeader>
                        <PopoverBody>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productosVenta}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td><b>Total:</b></td>
                                        <td></td>
                                        <td>{totalCarro} CLP</td>
                                    </tr>
                                </tfoot>   
                            </Table>
                        </PopoverBody>
                    </Popover>
                </Button>
            </div>
        );
    };
};

export default Carro;