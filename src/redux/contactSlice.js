import { createSlice } from "@reduxjs/toolkit";

const formDatailsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: { 
        addNewContact: (state, action) => {
            return [...state, action.payload];
        },
        deleteContact: (state, action) => {
            return state.filter(contact => contact.id !== action.payload);
        }
    }
});

export const { addNewContact, deleteContact } = formDatailsSlice.actions;
export const formDatailsReducer = formDatailsSlice.reducer;
