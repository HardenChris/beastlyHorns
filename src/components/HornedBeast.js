import React from 'react';
import { Component } from 'react';
import { Card } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';


export default class HornedBeasts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes:0
        }
    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes + 1
        });
    }

    render() {
        return (
            <h2>
                <Card bg='secondary' text='white' id='pocketMonsterCard' style={{width: '18rem'}}>
                    <Card.Title>{this.props.beast.Title}</Card.Title>
                    <Card.Img variant="top" src={this.props.beast.imagage_url} alt={this.props.beast.description}/>
                    <Card.Body>
                        <Card.Text>
                            {this.props.beast.description}
                        </Card.Text>
                        <Button variant='primary' onClick={this.handleClick}>{this.state.likes}</Button>
                    </Card.Body>
                </Card>
            </h2>
        )
    }
}