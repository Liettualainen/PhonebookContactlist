import { FormFeedback, FormLebel, FormSection,
  FormCheck, Button, InputName, FormRadio, FormSelect,
} from "./ContactBook.styled";

const Gender = {
  MALE: "male",
  FEMALE: "female",
};

export const ContactForm = ({ onName, onNumber, onGender, onAge, onAgreed,
    onFormSubmit, onHandleChange }) => (
           <FormFeedback name="form" onSubmit={onFormSubmit}>
        <FormLebel><InputName>Name</InputName>
            <input type="text"
            placeholder="Enter the name"
            name="name" required
            value={onName}
            onChange={onHandleChange}
          />
            </FormLebel>
            <FormLebel><InputName>Number</InputName>
            <input type="tel"
            placeholder="Enter tel number"
            name="number" required 
            value={onNumber}
            onChange={onHandleChange}
          />
            </FormLebel>
        <FormSection>
              <InputName>Choose gender</InputName>
              <FormRadio>
          <label>
            Male
            <input
              type="radio"
              checked={onGender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={onHandleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={onGender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={onHandleChange}
            />
          </label>
              </FormRadio>
            </FormSection>
            <FormLebel>
              <InputName>Choose age</InputName>
              <FormRadio>
            <FormSelect name="age" value={onAge} onChange={onHandleChange}>
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
            checked={onAgreed}
            onChange={onHandleChange}
          />
            </FormCheck>
            <Button type="submit" >Add contact</Button>
        </FormFeedback>
)