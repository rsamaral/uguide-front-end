import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Header,
  NomeCard as NameCard,
  MainContainer,
  AvatarUser,
  BtnCard,
  BtnContainer,
} from './styles';
import { history } from '../../helpers/history';

const Account = () => {
  const currentUser = useSelector((state) => state.auth.user);

  const registerTourOnClick = () => {
    history.push('/add');
    window.location.reload();
  };

  const myProfileOnClick = () => {
    history.push('/myprofile');
    window.location.reload();
  };

  const myPackagesOnClick = () => {
    history.push('/mypackages');
    window.location.reload();
  };

  const searchToursOnClick = () => {
    history.push('/list');
    window.location.reload();
  };

  const myPaymentsOnClick = () => {
    history.push('/mypayments');
    window.location.reload();
  };

  const myBookingsOnClick = () => {
    history.push('/mybookings');
    window.location.reload();
  };

  if (!currentUser) {
    return <Redirect to='/loginPage' />;
  }

  console.log('currentUser.roles', currentUser.roles);

  return (
    <MainContainer>
      <Header>My Account</Header>

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
                  <BtnCard onClick={registerTourOnClick}>
                    Register New Tour
                  </BtnCard>
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
