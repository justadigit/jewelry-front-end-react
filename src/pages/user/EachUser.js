import React from 'react';
import {
  InfoLabel,
  InfoValue,
  Update,
  UserCard,
  UserInfo,
} from './User.styles';

const EachUser = ({ user, items, setUpdateUserForm }) => {
  return (
    <UserCard>
      <UserInfo>
        <InfoLabel>Name</InfoLabel>
        <InfoValue>{user.name}</InfoValue>
      </UserInfo>
      <UserInfo>
        <InfoLabel>Email</InfoLabel>
        <InfoValue>{user.email}</InfoValue>
      </UserInfo>
      <UserInfo>
        <InfoLabel>Posts</InfoLabel>
        <InfoValue>{items.length}</InfoValue>
      </UserInfo>
      <Update onClick={() => setUpdateUserForm(true)}>Update Info</Update>
    </UserCard>
  );
};

export default EachUser;
