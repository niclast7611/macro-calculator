import React, { Component } from 'react'
import {
  Button, 
  Form,
  FormGroup,
  Label,
  Input} from 'reactstrap';
  import './Macro.css'; 

export default class Macro extends Component {
  render() {
    return (
    <div className='card'>

        <Form id='form'>
        <h1>Calculate your Macros</h1>
          <FormGroup id='inputs'>
            <Label for="Age" id='labels-left'>
              Age
            </Label>
            <Input
              id="Age"
              name="Age"
              placeholder="25"
              type="text"
            />
          </FormGroup>
          <FormGroup id='inputs'>
            <Input
              id="gender-male"
              name="gender-male"
              placeholder="Male"
              type="radio"
            /> 
            <Label for="gender-male" id='labels-right'>
            Male
          </Label>
            <Input
              id="gender-female"
              name="gender-female"
              placeholder="Female"
              type="radio"
            /> 
            <Label for="gender-female" id='labels-right'>
            Female
          </Label>
          </FormGroup>
          <FormGroup id='inputs'>
            <Label for="height" id='labels-left'>
              Height
            </Label>
            <Input
              id="height"
              name="feet"
              placeholder="feet"
              type="text"
            />
            <Input
              id="height"
              name="inches"
              placeholder="inches"
              type="text"
            />
          </FormGroup>
          <FormGroup id='inputs'>
            <Label for="weight" id='labels-left'>
              Weight
            </Label>
            <Input
              id="weight"
              name="pounds"
              placeholder="pounds"
              type="text"
            />
          </FormGroup>
          <FormGroup id='inputs'>
            <Label for="activty" id='labels-left'>
              Activty Level
            </Label>
            <Input
              id="activty"
              name="activty"
              type="select"
            >
          <option>
            No exercise
          </option>
          <option>
            Light exercise 1-3 times per week
          </option>
          <option>
            Moderate exercise 4-5 times per week
          </option>
          <option>
            Active exercise 3-4 times per week
          </option>
          <option>
            Intense exercise 6-7 times per week
          </option>
          </Input>
          </FormGroup>
          <FormGroup id='inputs'>
            <Label for="goal" id='labels-left'>
              Your Goal
            </Label>
            <Input
              id="goal"
              name="goal"
              type="select"
            >
          <option>
            Maintain Weight
          </option>
          <option>
            Loose Weight
          </option>
          <option>
            Gain weight
          </option>
          </Input>
          </FormGroup>
          <Button>
            Calculate
          </Button>
        </Form>
      </div>
    )
  }
}
