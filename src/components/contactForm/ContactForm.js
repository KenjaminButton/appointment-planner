import React from "react";

/*
implement ContactForm as a stateless component that renders
a web form to collect the necessary contact information.
https://reactjs.org/docs/forms.html
*/

/*
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

<input 
  type="text" 
  value={name}
  onChange={({target}) => {setName(target.value)}}
  required
/>
*/

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    // Rendered a form with onSubmit attribute set
    <form onSubmit={handleSubmit}>
      {/* 3 controlled <input> elements, one for each piece of contact data */}
      <h5>Name</h5>
      <input
        type="text"
        value={name}
        onChange={(target) => setName(target.value)}
        required
      />
      <h5>Phone</h5>
      <input 
        type="tel"
        value={phone}
        // pattern="(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)"
        // https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
        // pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
        onChange={(target) => setPhone(target.value)}
        required
      />
      <h5>Email</h5>
      <input 
        type="text"
        value={email}
        onChange={(target) => setEmail(target.value)}
        required
      />
      <input
        type="submit"
        value="Submit"
      />
        
    </form>
  );
};
