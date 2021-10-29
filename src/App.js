import React, { Component } from 'react';
import Footer from './components/Footer.js';
import Headers from './components/Header.js';
import HornForm from './components/HornForm.js';
import Mains from './components/Main.js';
import SelectedBeast from './components/SelectedBeast.js';
import data from './assets/data.json'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      featBeast: {}
    }
  }

  displayHorn = (data) => {
    this.setState ({beastData: data })
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
        'hello'
        <Headers />
        <HornForm data={data} displayHorn={this.displayHorn} />
        <Mains newModalBeast={this.newModalBeast} />
        <Footer />
        <SelectedBeast featBeast={this.state.featBeast} closeModal={this.closeModal} show={this.state.show}/>
      </div>
    )
  }
}