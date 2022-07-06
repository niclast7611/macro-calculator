import React, { Component } from 'react'
import './Result.css'; 
import { 
GiAvocado,
GiWheat,
GiChickenLeg,
GiBroccoli
 } from "react-icons/gi";


export default class Result extends Component {
  render() {
    return (
      <div id='result-container'>
        <h2>Results</h2>
        <div id='macros'>
            <div id='ind-macros'>
                <GiAvocado id='icons'/>
                <h3 id='fat'>Fat</h3>
                <h3>{this.props.fat}</h3>
                <p>Grams Per Day</p>
            </div>
            <div id='ind-macros'>
                <GiChickenLeg id='icons'/>
                <h3 id='protein'>Protein</h3>
                <h3>0</h3>
                <p>Grams Per Day</p>
            </div>
            <div id='ind-macros'>
                <GiWheat id='icons'/>
                <h3 id='carbs'>Carbs</h3>
                <h3>0</h3>
                <p>Grams Per Day</p>
            </div>
            <div id='ind-macros'>
                <GiBroccoli id='icons'/>
                <h3 id='calories'>Calories</h3>
                <h3>0</h3>
                <p>Grams Per Day</p>
            </div>
        </div>
      </div>
    )
  }
}
