import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from '@mui/system';

import { getUserData } from '../../store/auth/authSlice';

import { SideBar, FriendsSideBar, Messenger, AppBar } from '.';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
});

export const Dashboard = () => {
  const navigate = useNavigate();
  const userData = useSelector(getUserData);

  useEffect(() => {
    if (!userData) navigate('/login');
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};
