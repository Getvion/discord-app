import React from 'react';
import { styled } from '@mui/system';

import { AddFriendButton, FriendsTitle } from './components';
import { FriendsList } from './FriendsList';
import { PendingInvitationsList } from './PendingInvitations';

const MainContainer = styled('div')({
  width: '224px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#2F3136'
});

export const FriendsSideBar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title='Private Messages' />
      <FriendsList />
      <FriendsTitle title='Invitations' />
      <PendingInvitationsList />
    </MainContainer>
  );
};
