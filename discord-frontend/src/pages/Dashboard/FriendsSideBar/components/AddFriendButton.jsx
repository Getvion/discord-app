import React, { useState } from 'react';

import { CustomButton } from '../../../../shared/components';
import { AddFriendDialog } from './';

const additionalStyles = {
  marginTop: '10px',
  marginLeft: '5px',
  width: '80%',
  height: '30px',
  background: '#3ba55d'
};

export const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState('');

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <CustomButton
        additionalStyles={additionalStyles}
        label='Add Friend'
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  );
};
