import React from 'react';
import {Button,Badge} from 'reactstrap';

class Carro extends React.Component{
    render(){
        return(
            <div>
                <Button color="info">
                    <Badge className="secundary">0</Badge>
                    <span><i className="material-icons">shopping_cart</i></span>
                </Button>
            </div>
        );
    };
};

export default Carro;