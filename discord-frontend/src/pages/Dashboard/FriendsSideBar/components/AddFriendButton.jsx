import React from 'react';

import { CustomButton } from '../../../../shared/components';

const additionalStyles = {
  marginTop: '10px',
  marginLeft: '5px',
  width: '80%',
  height: '30px',
  background: '#3ba55d'
};

export const AddFriendButton = () => {
  const handleOpenAddFriendDialog = () => {};

  return (
    <>
      <CustomButton
        additionalStyles={additionalStyles}
        label='Add Friend'
        onClick={handleOpenAddFriendDialog}
      />
    </>
  );
};
