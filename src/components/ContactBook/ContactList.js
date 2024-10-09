import { ContactFilter } from "./ContactFilter"
import {Phonebookstyle, ContactsDiv, FindContactsUl, DeleteButton, ContactsLi, ContactsSpanDiv,
} from "./ContactBook.styled";

export const ContactList = ({ onContacts, onFilterContact, onFilter,onDeleteContact }) => (
    <ContactsDiv>
            {(onContacts.length > 0) &&
              <>
            <Phonebookstyle>Contacts</Phonebookstyle>
            <ContactFilter onFilterContact={onFilterContact}/>
              
            {(onFilter) 
                 ? <FindContactsUl >  
            {onContacts.filter(contact => contact.name.toLowerCase().includes(onFilter.toLowerCase())).map(({id, name, number, gender, age}) => (
            <ContactsLi key={id} >
                    <ContactsSpanDiv>
                  <span>{name} tel.No:{number}</span>
                <span>Gender: {gender}, Age: {age}</span>
                </ContactsSpanDiv>
              <DeleteButton onClick={()=> onDeleteContact(id)}>DELETE</DeleteButton>
            </ContactsLi>
                           ))}
              </FindContactsUl>
                  : <FindContactsUl >  
            {onContacts.map(({id, name, number, gender, age}) => (
            <ContactsLi key={id} >
                <ContactsSpanDiv>
                  <span>{name} tel.No:{number}</span>
                <span>Gender: {gender}, Age: {age}</span>
                </ContactsSpanDiv>
              <DeleteButton onClick={()=> onDeleteContact(id)}>DELETE</DeleteButton>
            </ContactsLi>
                    ))}
                </FindContactsUl>
            }
              </>
        }
    </ContactsDiv>
    )



            //   {/* <FindContactsDiv>
            //     <FindContactsSpan>Find contacts by name</FindContactsSpan>
            //    <FindContactsInput 
            // type="text"
            // placeholder="Search contact"
            // name="filter"
            // //  value={filter}
            // onChange={onFilterContact}
            // />
            //   </FindContactsDiv> */}