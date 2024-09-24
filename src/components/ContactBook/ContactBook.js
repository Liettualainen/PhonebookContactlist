import { Component } from "react";
import { nanoid } from "nanoid";
import {
  DivLayout, Phonebookstyle, FormFeedback, FormLebel, FormSection,
  FormCheck, Button, InputName, FormRadio, FormSelect} from "./ContactBook.styled";
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
  name: '',
  number: '',
  filter: '',
  gender: null,
  age: "",  
  agreed: false,
  };
export class Contactbook extends Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number, gender, age, agreed, contacts } = this.state;
    console.log("state", this.state);
    const id = nanoid();
    if (agreed) {
      const contactsName = contacts.map(item => { item = item.name; return item })
      if (contactsName.includes(name)) {
        alert(`${name} is already in the Phonebook`);
      }
      else {
        this.setState(prevState => ({ contacts: [...prevState.contacts, { id, name, number, gender, age, agreed }] }))
        // contacts.push({ id, name, number, gender, age, agreed });
        // this.setState({ contacts: [contacts] });    
        this.reset();
      }
    }
    else {
        alert("Please confirm correct info");
    }   
  }

  reset = () => {
    this.setState({ name: "", number: "", gender: "", age: "", agreed: "" })
    // this.setState({ ...INITIAL_STATE });
  };

  filterContact = evt => {
    const { contacts, filter } = this.state;
    this.setState({ filter: evt.target.value });
     console.log(contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()) ))
  }

  // deleteContact = id => {
  //   console.log(id);
  // }


  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };


  render() {

   const {name, number, gender, age, agreed, contacts, filter } = this.state;
      return (
        <DivLayout>
                 <Phonebookstyle>Phonebook
       </Phonebookstyle>
        <FormFeedback name="form" onSubmit={this.handleSubmit}>
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
            
            <Button type="submit" >Add contact</Button>
            
        </FormFeedback>
          
          <div>
            {(contacts.length > 0) &&
              <>
                         <Phonebookstyle>Contacts
              </Phonebookstyle>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "start", margin: 0, padding: 0, }}>
                <span>Find contacts by name</span>
               <input 
            type="text"
            placeholder="Search contact"
            name="filter"
            //  value={filter}
            onChange={this.filterContact}
            />
              </div>
              {
                (filter) ?
                  <ul style={{ margin: 0, padding: 0, }}>  
                           {contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())).map(contact => (
            <li key={contact.id} style={{ display: "flex", flexDirection: "row", alignItems: "start", margin: 0, padding: 0,}}>
                <span>Name: {contact.name}:Number: {contact.number} Gender:{contact.gender} Age:{contact.age}</span>
              <button onClick={this.deleteContact}>DELETE</button>
            </li>
                           ))}
                      </ul>
                  : <ul style={{ margin: 0, padding: 0, }}>  
            {contacts.map(({id, name, number, gender, age}) => (
            <li key={id} style={{ display: "flex", flexDirection: "row", alignItems: "start", margin: 0, padding: 0,}}>
                <span>Name: {name}:Number: {number} Gender:{gender} Age:{age}</span>
              <button onClick={()=> this.deleteContact(id)}>DELETE</button>
            </li>
                    ))}
          </ul>                
}
              </>
              } 
          </div>
    </DivLayout>)
  }
}