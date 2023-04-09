import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: JSON.parse(localStorage.getItem('contacts')) ?? [],
  }; 

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContacts(state, action) {
            state.items.push(action.payload)
        },
        deleteContacts(state, action) {
const newArray = state.items.filter(item => item.id !== action.payload)
state.items = newArray;
        },
      
    }
})

export const { addContacts, deleteContacts } = contactsSlice.actions

export default contactsSlice.reducer