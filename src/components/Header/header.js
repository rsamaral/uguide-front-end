import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home.js';
import ProfilePage from '../../pages/Profile/Profile.js';
import List from '../../pages/List/List.js';
import About from '../../pages/About/About.js';
import RegisterPage from '../../pages/Register/Register.js';
import Login from '../../pages/Login/Login.js';
import Contact from '../../pages/Contact/Contact.js';
import AddTour from '../../components/AddTour/AddTour.js';
import Tour from '../Tour.js';

import {
  Nav,
  NavBtn,
  NavLink,
  NavBtnLinkB,
  NavBtnLinkW,
  NavMenu,
  AvatarUser,
  NavBtnLinkAvatar,
  NavBtnAvatar,
} from './styles.js';

import { logout } from '../../actions/auth-actions/auth.js';
import { clearMessage } from '../../actions/auth-actions/message.js';
import { history } from '../../helpers/history.js';

import MyProfile from '../../pages/Profile/Profile.js';
import MyPackages from '../../pages/MyTours/MyTours.js';
import MyPayments from '../../pages/Payments/Payments.js';
import MyBookings from '../../pages/MyBookings/MyBookings.js';
import Confirmation from '../../pages/BookSuccess/BookSuccess.js';

const Header = () => {
  const dispatch = useDispatch();

  // Get user from Redux store
  const user = useSelector((state) => state.auth.user);

  const [currentUser, setCurrentUser] = useState(undefined);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  // Clear messages on route change
  useEffect(() => {
    const unlisten = history.listen(() => {
      dispatch(clearMessage());
    });

    return () => {
      if (unlisten) unlisten();
    };
  }, [dispatch]);

  // Load logged user
  useEffect(() => {
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles?.includes('ROLE_MODERATOR'));
      setShowAdminBoard(user.roles?.includes('ROLE_ADMIN'));
    } else {
      setCurrentUser(undefined);
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router forceRefresh={true}>
      <Fragment>
        <Nav>
          <NavMenu>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>

            {!currentUser ? (
              <Fragment>
                <NavBtn>
                  <NavBtnLinkB to={'/registerPage'}>Register</NavBtnLinkB>
                </NavBtn>
                <NavBtn>
                  <NavBtnLinkW to={'/loginPage'}>Login</NavBtnLinkW>
                </NavBtn>
              </Fragment>
            ) : (
              <Fragment>
                <NavBtnAvatar>
                  <NavBtnLinkAvatar to={'/profilePage'}>
                    <AvatarUser
                      name={currentUser.fullname}
                      maxInitials='2'
                      color='fff'
                      fgColor='000'
                    />
                  </NavBtnLinkAvatar>
                </NavBtnAvatar>

                <NavBtn>
                  <NavBtnLinkW to={'/loginPage'} onClick={handleLogout}>
                    Logout
                  </NavBtnLinkW>
                </NavBtn>
              </Fragment>
            )}
          </NavMenu>
        </Nav>

        <div>
          <Switch>
            <Route exact path={['/home', '/']}>
              <Home />
            </Route>

            <Route exact path={['/list']}>
              <List />
            </Route>

            <Route exact path={['/about']}>
              <About />
            </Route>

            <Route exact path={['/contact']}>
              <Contact />
            </Route>

            <Route exact path={['/registerPage']}>
              <RegisterPage />
            </Route>

            <Route exact path={['/loginPage']}>
              <Login />
            </Route>

            <Route exact path={['/profilePage']}>
              <ProfilePage />
            </Route>

            <Route exact path='/add' component={AddTour} />

            <Route exact path={['/myprofile']}>
              <MyProfile />
            </Route>

            <Route exact path={['/mypackages']}>
              <MyPackages />
            </Route>

            <Route exact path={['/mypayments']}>
              <MyPayments />
            </Route>

            <Route exact path={['/mybookings']}>
              <MyBookings />
            </Route>

            <Route exact path={['/confirmation']}>
              <Confirmation />
            </Route>

            <Route path='/tour/:id' component={Tour} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default Header;
