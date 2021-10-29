import React from 'react';
import { Component } from 'react';
import BeastInfo from '../assets/data.json'
import HornedBeasts from './HornedBeast';


export default class Mains extends Component {
    render () {
        let beastBoy = BeastInfo.map(beast => <HornedBeasts beast={beast}/>)
        return(
                <Component>
                    {beastBoy}
                </Component>
        )
    }
}