import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showAlertMessage: false,
  alertMessageContent: null
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.showAlertMessage = true;
      state.alertMessageContent = action.payload;
    },

    hideAlert: (state) => {
      state.showAlertMessage = false;
      state.alertMessageContent = null;
    }
  }
});

export const alertReducer = alertSlice.reducer;

export const { showAlert, hideAlert } = alertSlice.actions;

export const alertSelector = (state) => state.alert;
