import { createSlice } from "@reduxjs/toolkit";

const formFilterSlice = createSlice({
    name: 'fliter',
    initialState: '',
    reducers: { 
        filterContacts: (state, action) => {
            return action.payload
        }
    }
});

export const { filterContacts } = formFilterSlice.actions;
export const formFilterReduser = formFilterSlice.reducer;