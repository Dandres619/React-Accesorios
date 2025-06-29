import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Features/auth/slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});
