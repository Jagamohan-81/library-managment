// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from "./reducers/authSlice";
import { loginReducer } from "./reducers/authUserLoginSlice";



const persistConfig = {
  key: 'root-storage', // Key for the root of the storage
  storage, // Use local storage
  whitelist: ['userLogin'], // List of reducer slices you want to persist
};

const persistedLoginReducer = persistReducer(persistConfig, loginReducer);
export const store = configureStore({
  reducer: { auth: authReducer, userLogin: persistedLoginReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

