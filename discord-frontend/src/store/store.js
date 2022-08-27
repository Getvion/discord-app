import { configureStore } from '@reduxjs/toolkit';

import { authRedcuer } from './auth/authSlice';
import { alertReducer } from './alert/alertSlice';

export const store = configureStore({
  reducer: {
    auth: authRedcuer,
    alert: alertReducer
  },
  devTools: true
});
