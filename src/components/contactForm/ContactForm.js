import React from "react";

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
    <form onSubmit={handleSubmit}>
      <input 
        value={name}
        type="text"
        onChange={target => setName(target.value)}
        required
      />
      <input
        value={phone}
        type="tel"
        pattern="^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$"
        onChange={target => setPhone(target.value)}
        required
      />
      <input
        type="email"
        value={email}
        onChange={target => setEmail(target.value)}
        required
      />
      <input
        type="submit"
      />
    </form>
  );
};


