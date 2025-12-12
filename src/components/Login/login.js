import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  FormLogin,
  InputLogin,
  BtnLogin,
  MainContainer,
  ErrorMessage,
  Header,
  BtnContainer,
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/auth-actions/auth';

const Login = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const message = useSelector((state) => state.message.message);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      setLoading(false);
      return;
    }

    // We don't depend on the returned promise for redirect,
    // only on Redux state (isLoggedIn)
    dispatch(login(email, password)).finally(() => {
      setLoading(false);
    });
  };

  // 👇 This is the redirect trigger:
  if (isLoggedIn) {
    return <Redirect to='/profilePage' />;
  }

  return (
    <MainContainer>
      <Header>Login</Header>

      <FormLogin onSubmit={handleLogin}>
        <div>
          <InputLogin
            placeholder='Email'
            type='text'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <InputLogin
            placeholder='Password'
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <BtnContainer>
          <BtnLogin disabled={loading}>
            {loading && <span className='spinner-border spinner-border-sm' />}
            <span>Login</span>
          </BtnLogin>
        </BtnContainer>
      </FormLogin>

      {message && (
        <div>
          <ErrorMessage>{message}</ErrorMessage>
        </div>
      )}
    </MainContainer>
  );
};

export default Login;
