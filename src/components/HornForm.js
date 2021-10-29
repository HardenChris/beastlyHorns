// import React from 'react';
// import { Component } from 'react';
// import { Form, ListGroup } from 'react-bootstrap';


// export default class HornForm extends Component {
   
//    constructor(props) {
//        super(props);
//        this.state = {
//            hornArray: {this.props.data.map()}
//        }
//    }
   
   
//    handleChange = (event) => {
//        let selection = event.target.value;
//        let updatedHornArray;

//        if (selection === 1) {
//            updatedNumberArray = {this.props.beast.horns}.filter(num => num === 1)
//            this.setState({hornArray: updatedHornArray})
//        } else if (selection === 2) {
//            pdatedNumberArray = {this.props.beast.horns}.filter(num => num === 2)
//            this.setState({hornArray: updatedHornArray})
//        }else if (selection === 3) {
//            pdatedNumberArray = {this.props.beast.horns}.filter(num => num === 3)
//            this.setState({hornArray: updatedHornArray}) 
//        }else if (selection === 100) {
//            pdatedNumberArray = {this.props.beast.horns}.filter(num => num === 100)
//            this.setState({hornArray: updatedHornArray})
//        }else {
//        this.setState({hornArray: {this.props.beast.horns}})
//     } 
//     }
   
//     render () {
//         return (
//             <div>
//             <Form>
//                 <Form.Select onChange={this.handleChange} aria-label="Default select example">
//                     <option>Open this select menu</option>
//                     <option value="1">One</option>
//                     <option value="2">Two</option>
//                     <option value="3">Three</option>
//                     <option value="100">One Hundred</option>
//                     </Form.Select>
//             </Form>
//             <ListGroup>

//             </ListGroup>
//         </div>
//         )
//     }
// }