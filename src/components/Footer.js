import React from 'react';
import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';


class Footer extends Component {
    render () {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" >
                    <Container>
                        <Navbar.Brand href="#home">Chris Harden</Navbar.Brand>
                    </Container>
            </Navbar>
        )
    }
}

export default Footer;