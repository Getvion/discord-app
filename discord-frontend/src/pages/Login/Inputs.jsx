import React from 'react';

import { InputWithLabel } from '../../shared/components';

export const Inputs = ({ mail, setMail, password, setPassword }) => {
  return (
    <>
      <InputWithLabel
        valaue={mail}
        setValue={setMail}
        label='E-mail'
        type='text'
        placeholder='Enter e-mail adress'
      />
      <InputWithLabel
        valaue={password}
        setValue={setPassword}
        label='E-mail'
        type='password'
        placeholder='Enter password'
      />
    </>
  );
};
