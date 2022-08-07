import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton, RedirectInfo } from '../../shared/components';

export const Footer = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate('/register');
  };

  return (
    <>
      <CustomButton
        label='Log in'
        additionalStyles={{ marginTop: '30px' }}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
      <RedirectInfo
        text='Need an account? '
        redirectText='Create an account'
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};
