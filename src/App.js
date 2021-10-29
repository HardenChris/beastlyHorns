import React, { Component } from 'react'
import Foot from './components/Footer.js'
import Head from './components/Header.js'
import Mains from './components/Main.js'


export default class App extends Component {
  render() {
    return (
      <div>
        'hello'
        <Head />
        <Foot />
        <Mains />
      </div>
    )
  }
}