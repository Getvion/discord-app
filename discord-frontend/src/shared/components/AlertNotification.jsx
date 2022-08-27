import React, { useEffect } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { alertSelector, hideAlert } from '../../store/alert/alertSlice';

export const AlertNotification = () => {
  const { showAlertMessage, alertMessageContent } = useSelector(alertSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideAlert());
    }, 5000);
  }, [showAlertMessage]);

  return (
    <Snackbar
      onClick={() => dispatch(hideAlert())}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={showAlertMessage}
    >
      <Alert severity='info'>{alertMessageContent}</Alert>
    </Snackbar>
  );
};
