import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};
const persistedReducer = persistReducer(persistConfig, contactsReducer);
export default configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
});
