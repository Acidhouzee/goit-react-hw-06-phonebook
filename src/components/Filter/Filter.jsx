import React from "react";
import { useDispatch } from 'react-redux';
import { filterContacts } from "redux/filterSlice";

const Filter = ( { filter } ) => {

    const dispatch = useDispatch();

    const filterName = event => {
        dispatch(filterContacts(event.target.value));
    };
    
    return (
        <div className="contacts-filter">
            <h3>Find contacts by name:</h3>
            <input
                type="text"
                name="name"
                pattern="^[A-Za-z\u0080-\uFFFF ']+$"
                onChange={filterName}
            />
        </div>  
    )
};

export default Filter;