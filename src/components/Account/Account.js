import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Header,
  NomeCard as NameCard,
  MainContainer,
  AvatarUser,
  BtnCard,
  BtnContainer,
} from './styles';

const Account = () => {
  const history = useHistory();

  const currentUser = useSelector((state) => state.auth.user);

  const registerTourOnClick = () => {
    history.push('/add');
  };

  const myProfileOnClick = () => {
    history.push('/myprofile');
  };

  const myPackagesOnClick = () => {
    history.push('/mypackages');
  };

  const searchToursOnClick = () => {
    history.push('/list');
  };

  const myPaymentsOnClick = () => {
    history.push('/mypayments');
  };

  const myBookingsOnClick = () => {
    history.push('/mybookings');
  };

  if (!currentUser) {
    return <Redirect to='/loginPage' />;
  }

  console.log('currentUser.roles', currentUser.roles);

  return (
    <MainContainer>
      <Header>My account</Header>

      {currentUser.roles &&
        currentUser.roles.map((role, index) => {
          if (role === 'ROLE_GUIDE') {
            return (
              <div key={index}>
                <NameCard>
                  <AvatarUser name={currentUser.fullname} maxInitials='2' />
                  {currentUser.fullname}
                </NameCard>

                <BtnContainer>
                  <BtnCard onClick={myPackagesOnClick}>My Packages</BtnCard>
                  <BtnCard onClick={myProfileOnClick}>
                    My Profile Details
                  </BtnCard>
                  <BtnCard onClick={myPaymentsOnClick}>My Payments</BtnCard>
                  <BtnCard onClick={registerTourOnClick}>Add new tour</BtnCard>
                </BtnContainer>
              </div>
            );
          } else if (role === 'ROLE_TOURIST') {
            return (
              <div key={index}>
                <NameCard>
                  <AvatarUser name={currentUser.fullname} maxInitials='2' />
                  {currentUser.fullname}
                </NameCard>

                <BtnContainer>
                  <BtnCard onClick={myBookingsOnClick}>My Bookings</BtnCard>
                  <BtnCard onClick={myPaymentsOnClick}>My Payments</BtnCard>
                  <BtnCard onClick={myProfileOnClick}>
                    My Profile Details
                  </BtnCard>
                  <BtnCard onClick={searchToursOnClick}>Find New Tour</BtnCard>
                </BtnContainer>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <NameCard>
                  <AvatarUser
                    color={AvatarUser.getRandomColor('sitebase', [
                      'red',
                      'green',
                      'blue',
                    ])}
                    name={currentUser.fullname}
                    maxInitials='2'
                  />
                  {currentUser.fullname}
                </NameCard>
                <h2>Hello, Admin!</h2>
              </div>
            );
          }
        })}
    </MainContainer>
  );
};

export default Account;
