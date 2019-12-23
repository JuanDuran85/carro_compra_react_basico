import React from 'react';
import {Navbar, NavItem, NavbarBrand, Nav} from 'reactstrap';
import Carro from './carro';

class Navegacion extends React.Component {
    render(){
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Carro listaCarro={this.props.listaCarro}/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    };
};

export default Navegacion;