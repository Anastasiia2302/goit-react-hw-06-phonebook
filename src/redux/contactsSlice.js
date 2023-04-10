import { createSlice } from '@reduxjs/toolkit';
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState ={items: []};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContacts: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContacts: (state, action) => {
      const newArray = state.items.filter(item => item.id !== action.payload);
      state.items = newArray;
    },
  },
});
const persistConfig = {
  key: 'contacts',
  storage,
};
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContacts, deleteContacts } = contactsSlice.actions;

