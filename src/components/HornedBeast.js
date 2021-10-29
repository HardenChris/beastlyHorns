import React from 'react';
import { Component } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default class HornedBeast extends React.Component {

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

    handleImgClick = () => {
        this.props.newModalBeast(this.props.beast)
    }

    render() {
        return (
            <h2>
                <Card bg='secondary' text='white' id='pocketMonsterCard' style={{width: '18rem'}}>
                    <Card.Img variant="top" src={this.props.beast.image_url} alt={this.props.beast.description} onClick={this.handleImgClick} />
                    <Card.Body>
                        <Card.Title>{this.props.beast.title}</Card.Title>
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