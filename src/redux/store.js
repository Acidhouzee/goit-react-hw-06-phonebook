import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { formDatailsReducer } from "redux/contactSlice";
import { formFilterReduser } from "redux/filterSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    contacts: formDatailsReducer,
    filter: formFilterReduser,
  });
  
  const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST"], 
        },
    }),
  });
  
  export const persistor = persistStore(store);