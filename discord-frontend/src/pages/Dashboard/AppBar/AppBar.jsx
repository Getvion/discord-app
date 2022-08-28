import React from 'react';
import { styled } from '@mui/system';

const MainContainer = styled('div')({
  position: 'absolute',
  right: '0',
  right: '0',
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
  return <MainContainer>AppBar</MainContainer>;
};
