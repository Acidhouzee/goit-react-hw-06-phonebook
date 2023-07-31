import React from "react";
import { useDispatch } from 'react-redux';
import { deleteContact } from "redux/contactSlice";
import css from '../Contacts/Contacts.module.css';

const Contacts = ( { contacts } ) => {

    const dispatch = useDispatch();
    
    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    }

    return (
        <div className="feedback-options">
            <ul className={css.feedback_options_ul} >
                {contacts.map(contact => (
                    <li className={css.feedback_options_li} key={contact.id}>
                        {contact.name}: {contact.number}
                        <button className={css.feedback_options_li_button} type="button" onClick={() => handleDeleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>  
    ); 
};

export default Contacts;