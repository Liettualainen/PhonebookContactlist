import {FindContactsDiv, FindContactsSpan, FindContactsInput} from "./ContactBook.styled";

export const ContactFilter = ({onFilterContact }) => (
            <FindContactsDiv>
            <FindContactsSpan>Find contacts by name</FindContactsSpan>
            <FindContactsInput 
            type="text"
            placeholder="Search contact"
            name="filter"
            //  value={filter}
            onChange={onFilterContact}
            />
              </FindContactsDiv>
)