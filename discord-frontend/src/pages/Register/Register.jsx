import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthBox } from '../../shared/components';
import { Inputs, Footer } from './';
import { validateRegisterForm } from '../../shared/utils/validators';
import { getUserData, register } from '../../store/auth/authSlice';

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);

  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, password, username }));
  }, [mail, password, setIsFormValid, username]);

  const handleRegister = () => {
    const userDetails = { mail, username, password };
    dispatch(register(userDetails));
  };

  useEffect(() => {
    if (userData) navigate('/dashboard');
  }, [userData, navigate, dispatch]);

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
