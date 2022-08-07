import React, { useState } from 'react';
import { AuthBox, RedirectInfo } from '../../shared/components';
import { Header, Footer } from './';
import { Inputs } from './Inputs';

export const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLogin = () => {
    console.log('login in');
  };

  return (
    <AuthBox>
      <Header />
      <Inputs mail={mail} setMail={setMail} password={password} setPassword={setPassword} />

      <Footer isFormValid={isFormValid} handleLogin={handleLogin} />
      <RedirectInfo />
    </AuthBox>
  );
};
