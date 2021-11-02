import React, { Component } from 'react';
import Footer from './components/Footer.js';
import Headers from './components/Header.js';
import HornForm from './components/HornForm.js';
import Mains from './components/Main.js';
import SelectedBeast from './components/SelectedBeast.js';
import allBeastsArray from './assets/data.json'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      featBeast: {},
      displayedBeastsArray: allBeastsArray
    }
  }

  userSelection = (numberOfHorns) => {
    const filteredArray = allBeastsArray.filter(
      (singleBeast) => {return singleBeast.horns === numberOfHorns || numberOfHorns === -1} 
    )
    this.setState({displayedBeastsArray:filteredArray}) 
  }

  newModalBeast = (beast) => {
    this.setState ({
      featBeast: beast
    })
    this.openModal();
  }


  closeModal = () => {
    this.setState ({
     show: false 
    })
  }

  openModal = () => {
    this.setState ({
      show: true
    })
  }

  render() {
    return (
      <div>
        <Headers />
        <HornForm userSelection={this.userSelection}/>
        <Mains newModalBeast={this.newModalBeast} beastAll={this.state.displayedBeastsArray}/>
        <Footer />
        <SelectedBeast featBeast={this.state.featBeast} closeModal={this.closeModal} show={this.state.show}/>
      </div>
    )
  }
}