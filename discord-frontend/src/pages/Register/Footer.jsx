import React from 'react';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { CustomButton, RedirectInfo } from '../../shared/components';

const getFormNotValidMessage = () => {
  return 'Username should contains between 3 and 12 characters and password should be more than 6 characters. Also correct e-mail address should provided';
};

const getFormValidMessage = () => {
  return 'Press to register!';
};

export const Footer = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate('/login');
  };

  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
        <div>
          <CustomButton
            label='Register'
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text='Already have an account? '
        redirectText='Login to account'
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};
