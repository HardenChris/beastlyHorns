import React from 'react';
import { Container } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
import { Row } from 'react-bootstrap';


export default class Mains extends React.Component {

    render () { 
        let beastBoy = this.props.beastAll.map(beast => <HornedBeast newModalBeast={this.props.newModalBeast} beast={beast}/>)
        return(
                <Container>
                    <Row xs={1} sm={2} md={3} lg={4}>
                    {beastBoy}
                    </Row>
                </Container>
        )
    }
}