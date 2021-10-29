import React, { Component } from 'react'
import Footer from './components/Footer.js'
import Headers from './components/Header.js'
import Mains from './components/Main.js'


export default class App extends Component {
  render() {
    return (
      <div>
        'hello'
        <Headers />
        <Mains />
        <Footer />
      </div>
    )
  }
}