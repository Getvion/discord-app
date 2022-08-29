import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton } from '@mui/material';

export const InvitationDecisionButtons = ({ idDisabled, acceptInvitation, rejectInvitation }) => {
  return (
    <Box>
      <IconButton style={{ color: 'white' }} disabled={idDisabled} onClick={acceptInvitation}>
        <CheckIcon />
      </IconButton>
      <IconButton style={{ color: 'white' }} disabled={idDisabled} onClick={rejectInvitation}>
        <ClearIcon />
      </IconButton>
    </Box>
  );
};
