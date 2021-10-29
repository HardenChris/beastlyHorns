import React from 'react';
import { Component } from 'react';
import { Container } from 'react-bootstrap';
import BeastInfo from '../assets/data.json'
import HornedBeast from './HornedBeast';
import { Row } from 'react-bootstrap';


export default class Mains extends React.Component {
    render () {
        let beastBoy = BeastInfo.map(beast => <HornedBeast beast={beast}/>)
        return(
                <Container>
                    <Row xs={1} sm={2} md={3} lg={4}>
                    {beastBoy}
                    </Row>
                </Container>
        )
    }
}