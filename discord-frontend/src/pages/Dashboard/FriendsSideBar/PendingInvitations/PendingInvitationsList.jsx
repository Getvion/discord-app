import React from 'react';
import { styled } from '@mui/system';

import { PendingInvitationListItem } from '.';

const DUMMY_INVITATIONS = [
  {
    _id: '1',
    senderId: {
      username: 'Mark',
      mail: 'dummy@ad.com'
    }
  },
  {
    _id: '2',
    senderId: {
      username: 'John',
      mail: 'John@ad.com'
    }
  }
];

const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto'
});

export const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map((inv) => (
        <PendingInvitationListItem
          key={inv._id}
          id={inv._id}
          username={inv.senderId.username}
          mail={inv.senderId.mail}
          acceptFriend={() => {}}
          rejectFriend={() => {}}
        />
      ))}
    </MainContainer>
  );
};
