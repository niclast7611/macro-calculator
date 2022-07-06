import React, { Component } from 'react'
import Macro from './components/Macro.js';
import Result from './components/Result.js';
import './App.css'; 

export default class App extends Component {
constructor(props){
  super(props)
  this.state = {
    protein: '',
    fat: '',
    carbs: '',
    calories: '',
  }
}
callbackFunction = (childData) => {
  this.setState({protein: childData})
}
  
  render() {  
   return (
      <>
      <Macro newPerson={this.newPerson}/>
      <Result 
      protein={this.protein} 
      carbs={this.carbs} 
      fat={this.fat} 
      calories={this.calories} />
      </>
    )
  }
}

