import React from 'react';
import { useSelector } from 'react-redux';
import {
  Header,
  MainContainer,
  AccountContainer,
  AccountItem,
  ItemLabel,
} from './styles';

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.user);

  return (
    <MainContainer>
      <Header>My profile</Header>

      <AccountContainer>
        <ItemLabel>Name:</ItemLabel>
        <AccountItem>{currentUser.fullname}</AccountItem>

        <ItemLabel>Phone:</ItemLabel>
        <AccountItem>{currentUser.cellphone}</AccountItem>

        <ItemLabel>Country:</ItemLabel>
        <AccountItem>{currentUser.country}</AccountItem>

        <ItemLabel>Email:</ItemLabel>
        <AccountItem>{currentUser.email}</AccountItem>
      </AccountContainer>
    </MainContainer>
  );
};

export default Profile;
