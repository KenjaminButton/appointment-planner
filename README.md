# Completed Tasks:

1. Defined state variables for contacts and appointments

2. Defined a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts

3. Defined a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments

4. Passed the array of contacts and the appropriate callback function as props to the ContactsPage component 

5. Passed the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component

6. Receive two props:
The current list of contacts
A callback function for adding a new contact

7. Keep track of three local state values: the current name, phone, and email entered into the form

8. Check for duplicates whenever the name in the form changes and indicate the name is a duplicate

9. Only add a new contact on form submission if it does not duplicate an existing contact’s name

10. A successful submission should clear the form

11. In the Add Contact section, render a ContactForm with the following passed via props:
local state variables
local state variable setter functions
handleSubmit callback function