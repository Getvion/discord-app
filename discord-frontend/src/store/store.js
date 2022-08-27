import { configureStore } from '@reduxjs/toolkit';

import { authRedcuer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authRedcuer
  },
  devTools: true
});
