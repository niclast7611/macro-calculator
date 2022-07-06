import React, { Component } from 'react'
import Macro from './components/Macro.js';
import Result from './components/Result.js';
import './App.css'; 

export default class App extends Component {
  render() {
    return (
      <>
      <Macro />
      <Result />
      </>
    )
  }
}

