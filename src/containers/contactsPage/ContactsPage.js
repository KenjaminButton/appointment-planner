import React, {useState} from "react";

export const ContactsPage = (props) => {
  // Define state variables for contact info and duplicate check
  // implement ContactsPage as a stateful component to handle the logic for adding new contacts and listing current contacts.
  // Receive two props: The current list of contacts and a callback function for adding a new contact
  const contacts = props.contacts;
  const addContact = props.addContact;

  // const [contactInfo, setContactInfo] = useState();
  // const [duplicateCheck, setDuplicateCheck] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
