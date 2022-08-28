import React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Avatar } from '../../../../shared/components';
import { OnlineIndicator } from './';

export const FriendsListItem = ({ username, isOnline }) => {
  return (
    <Button
      style={{
        width: '100%',
        height: '42px',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textTransform: 'none',
        color: 'black',
        position: 'relative'
      }}
    >
      <Avatar username={username} />
      <Typography
        component='h6'
        variant='subtitle1'
        align='left'
        style={{ marginLeft: '7px', fontWeight: 700, color: '#8e9297' }}
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};
