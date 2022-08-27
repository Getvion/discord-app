import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Header, Footer, Inputs } from './';
import { AuthBox, RedirectInfo } from '../../shared/components';
import { validateLoginForm } from '../../shared/utils/validators';

import { getUserData, login } from '../../store/auth/authSlice';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    const userDetails = { mail, password };
    dispatch(login(userDetails));
  };

  useEffect(() => {
    if (userData) navigate('/dashboard');
  }, [userData, navigate, dispatch]);

  return (
    <AuthBox>
      <Header />
      <Inputs mail={mail} setMail={setMail} password={password} setPassword={setPassword} />

      <Footer isFormValid={isFormValid} handleLogin={handleLogin} />
      <RedirectInfo />
    </AuthBox>
  );
};
