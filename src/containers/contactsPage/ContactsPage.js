import React, { useEffect, useState } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm.js';

export const ContactsPage = (props) => {
  const contacts = props.contacts;
  const addContact = props.addContact;

  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('');

  const [duplicate, setDuplicate] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(name, phone, email);
      // Reset values
      setName('');
      setPhone('');
      setEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    for (const contact in contacts) {
      if (name === contact.name) {
        setDuplicate(true);
      }
      // return
    }
  });

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
          <ContactForm
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
