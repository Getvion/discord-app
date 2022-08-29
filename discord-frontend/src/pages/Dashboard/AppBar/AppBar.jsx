import React from 'react';
import { styled } from '@mui/system';
import { DropdownMenu } from './DropdownMenu';
import { Typography } from '@mui/material';

const MainContainer = styled('div')({
  position: 'absolute',
  right: '0',
  top: '0',
  height: '48px',
  borderBottom: '1px solid black',
  backgroundColor: '#36393f',
  width: 'calc(100% - 296px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 15px'
});

export const AppBar = () => {
  return (
    <MainContainer>
      <Typography component='h6' variant='subtitle1' style={{ fontWeight: 700, color: '#8e9297' }}>
        name of user
      </Typography>
      <DropdownMenu />
    </MainContainer>
  );
};
