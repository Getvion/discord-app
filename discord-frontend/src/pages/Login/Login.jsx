import React, { useEffect, useState } from 'react';

import { AuthBox, RedirectInfo } from '../../shared/components';
import { validateLoginForm } from '../../shared/utils/validators';
import { Header, Footer, Inputs } from './';

export const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);

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
