import React, { useState } from 'react';

import { Tooltip, Typography, Box } from '@mui/material';

import { Avatar } from '../../../../shared/components';
import { InvitationDecisionButtons } from './';

export const PendingInvitationListItem = ({ id, username, mail, acceptFriend, rejectFriend }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onAcceptInvitation = () => {
    acceptFriend({ id });
    setButtonDisabled(true);
  };

  const onRejectInvitation = () => {
    rejectFriend({ id });
    setButtonDisabled(true);
  };

  return (
    <Tooltip title={mail}>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            height: '42px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Avatar username={username} />
          <Typography
            variant='subtitle1'
            sx={{ marginLeft: '7px', fontWeight: 700, color: '#8e9297', flexGrow: 1 }}
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            isDisabled={buttonDisabled}
            acceptInvitation={onAcceptInvitation}
            rejectInvitation={onRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};
