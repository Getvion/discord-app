import { Tooltip } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton, RedirectInfo } from '../../shared/components';

const getFormNotValidMessage = () => {
  return 'Enter correct e-mail address and password should contains between 6 and 12 characters';
};

const getFormValidMessage = () => {
  return 'Press to log in!';
};

export const Footer = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate('/register');
  };

  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
        <div>
          <CustomButton
            label='Log in'
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text='Need an account? '
        redirectText='Create an account'
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};
