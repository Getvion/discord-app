import React, { useState, useEffect } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';

import { isMailValid } from '../../../../shared/utils/validators';
import { InputWithLabel, CustomButton } from '../../../../shared/components';

export const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {}
}) => {
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitation = () => {
    // send friend request to server
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail('');
  };

  useEffect(() => {
    setIsFormValid(isMailValid(mail));
  }, [mail, setIsFormValid]);

  return (
    <Dialog open={Boolean(isDialogOpen)} onClose={handleCloseDialog}>
      <DialogTitle>
        <Typography variant='body1' component='span'>
          Invite a Friend
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant='body1' component='span'>
            Enter e-mail address of friend which you would like to invite
          </Typography>
        </DialogContentText>
        <InputWithLabel
          label='Mail'
          type='text'
          value={mail}
          setValue={setMail}
          placeholder='Enter mail address'
        />
      </DialogContent>
      <DialogActions>
        <CustomButton
          onClick={handleSendInvitation}
          disabled={!isFormValid}
          label='Send'
          additionalStyles={{
            marginLeft: '15px',
            marginRight: '15px',
            marginBottom: '10px'
          }}
        />
      </DialogActions>
    </Dialog>
  );
};
