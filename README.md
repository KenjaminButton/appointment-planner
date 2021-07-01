# Guide to Appointment Planner

Download the tempalte folder and run the project locally. Run npm start on the project's root directory.

2a. "Keep track of the contacts and appointments data, each being an array of objects"
    (  Define state variables for contacts and appointments )
    In App.js, setState for contacts and appointments with the following: 
    const [contacts, setContacts] = useState([]);

    You will see the warning in your browser, at localhost, that 'useState' is not defined.
    At the top of App.js, insert the following:
    import React, { useState } from "react";

    Now, the page will load up properly again. For appointments, we can setState with the following:
    const [appointments, setAppointments] = useState([]);

