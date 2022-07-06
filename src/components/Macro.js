
import { useState } from 'react';
import {
  Button, 
  Form,
  FormGroup,
  Label,
  Input} from 'reactstrap';
  import './Macro.css'; 

const Macro = () => {

  const[age, setAge] = useState('');
  const[gender, setGender] = useState('');
  const[height, setHeight] = useState('');
  const[weight, setWeight] = useState('');
  const[activity, setActivity] = useState('');
  const[goal, setGoal] = useState('');
  const[protein, setProtein] = useState(0);
  const[fat, setFat] = useState(0);
  const[carb, setCarb] = useState(0);
  const[calorie, setCalorie] = useState(0);

let equation = (e) => {
  e.preventDefault()

   setProtein(2)
}

console.log(protein)
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
              type="text"
              onChange={e => setAge(e.target.value)}
              value={age}
            />
          </FormGroup>
          <FormGroup id='inputs'>
            <Input
              id="gender-male"
              name="gender"
              placeholder="Male"
              type="radio"
              onClick={() => setGender('male')}
              value={gender}
            /> 
            <Label for="gender-male" id='labels-right'>
            Male
          </Label>
            <Input
              id="gender-female"
              name="gender"
              placeholder="Female"
              type="radio"
              onClick={() => setGender('female')}
              value={gender}
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
              name="height"
              placeholder="inches"
              type="text"
              onChange={e => setHeight(e.target.value)}
              value={height}
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
              onChange={e => setWeight(e.target.value)}
              value={weight}
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
              onChange={e => setActivity(e.target.value)}
              value={activity}
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
              onChange={e => setGoal(e.target.value)}
              value={goal}
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
          <Button onSubmit={equation}>
            Calculate
          </Button>
        </Form>
      </div>
    )
  }
  export default Macro
