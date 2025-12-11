import React, { useState, useRef } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
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

const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    );
  }
};

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const message = useSelector((state) => state.message.message);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const formRef = useRef();
  const checkBtnRef = useRef();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    formRef.current.validateAll();

    if (checkBtnRef.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          history.push('/profilePage');
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to='/profilePage' />;
  }

  return (
    <MainContainer>
      <Header>Login</Header>

      <FormLogin onSubmit={handleLogin} ref={formRef}>
        <div>
          <InputLogin
            placeholder='Email'
            type='text'
            name='email'
            value={email}
            onChange={onChangeEmail}
            validations={[required]}
          />
        </div>

        <div>
          <InputLogin
            placeholder='Password'
            type='password'
            name='password'
            value={password}
            onChange={onChangePassword}
            validations={[required]}
          />
        </div>

        <BtnContainer>
          <BtnLogin disabled={loading}>
            {loading && (
              <span className='spinner-border spinner-border-sm'></span>
            )}
            <span>Login</span>
          </BtnLogin>
        </BtnContainer>

        {/* Hidden button used by the validation lib */}
        <BtnLogin style={{ display: 'none' }} ref={checkBtnRef} />
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
