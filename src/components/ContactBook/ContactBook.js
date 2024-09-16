import { Component } from "react";
import {
  DivLayout, Phonebookstyle, FormFeedback, FormLebel, FormSection,
  FormCheck, Button, InputName, FormRadio, FormSelect, RadioLebel} from "./ContactBook.styled";
// import { FeedbackOptions } from './FeedbackOptions.js';
// import { Section } from './Section.js'
const Gender = {
  MALE: "male",
  FEMALE: "female",
};

const INITIAL_STATE = {
      contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: '',
  gender: null,
  age: "",  
  agreed: false,
  };

export class Contactbook extends Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    this.setState({[name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  const { name, number, gender, age, agreed } = this.state;
    console.log(`Name: ${name},Number: ${number}. gender:${gender}, age:${age}, agreed:${agreed}`);
      //  this.props.onSubmit({ ...this.state });
  }

  render() {
   const {name, number, gender, age, agreed } = this.state;
      return (
        <DivLayout>
                 <Phonebookstyle>Phonebook
       </Phonebookstyle>
        <FormFeedback onSubmit={this.handleSubmit}>
        <FormLebel><InputName>Name</InputName>
              <input type="text"
                placeholder="Enter the name"
              name="name" required
             value={name}
            onChange={this.handleChange}
          />
            </FormLebel>
            <FormLebel><InputName>Number</InputName>
              <input type="tel"
                placeholder="Enter tel number"
               name="number" required 
            value={number}
            onChange={this.handleChange}
          />
            </FormLebel>
            

        <FormSection>
              <InputName>Choose gender</InputName>
              <FormRadio>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
              </FormRadio>
            </FormSection>

            <FormLebel>
              <InputName>Choose age</InputName>
              <FormRadio>
            <FormSelect name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>...</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </FormSelect>
              </FormRadio>
    
            </FormLebel>

        <FormCheck>
          <InputName>Confirm correct info </InputName>
              <input
            name="agreed"
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
            </FormCheck>
            
            <Button>Add contact</Button>
            
        </FormFeedback>
          

               <Phonebookstyle><br />Contacts
       </Phonebookstyle>
           <span><br />Find contacts by name
       </span>
       <input type="text" name="name" required />
    </DivLayout>)
  }
}