import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './usersSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer
  },
});