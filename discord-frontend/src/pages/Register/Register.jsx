import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import { AuthBox } from '../../shared/components';
import { Inputs, Footer } from './';
import { validateRegisterForm } from '../../shared/utils/validators';

export const Register = () => {
  const navigate = useNavigate();

  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, password, username }));
  }, [mail, password, setIsFormValid, username]);

  const handleRegister = () => {
    console.log('register');
  };

  return (
    <AuthBox>
      <Typography variant='h5' sx={{ color: 'white' }}>
        Create an account
      </Typography>
      <Inputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
      <Footer handleRegister={handleRegister} isFormValid={isFormValid} />
    </AuthBox>
  );
};
