import React from "react";
import { useSelector } from 'react-redux';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import css from "./App.module.css";


export function UserForm() {

  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const filterContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter?.toLowerCase() || '') ||
      contact.number.includes(filter || '')
  );


  return(
      <div className={css.form_wrapper}>
          <h2>Phonebook</h2>
          <Form></Form>                
          <h2>Contacts</h2>
          <Filter filter={{filter}}></Filter>
          <Contacts contacts={filterContacts}></Contacts>
      </div>
  ); 
};

export default UserForm;
