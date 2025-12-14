import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MainContainer,
  Header,
  RegisterForm,
  RegisterInput,
  RegisterButton,
  ErrorMessage,
} from './styles';
import { isEmail } from 'validator';
import { register } from '../../actions/auth-actions/auth';

// Validations
const required = (value) => {
  if (!value) {
    return <ErrorMessage>This field is required!</ErrorMessage>;
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return <ErrorMessage>This is not a valid email!</ErrorMessage>;
  }
};

const vFullname = (value) => {
  if (value.length < 3 || value.length > 50) {
    return (
      <ErrorMessage>
        The full name must be between 3 and 50 characters.
      </ErrorMessage>
    );
  }
};

const vCellphone = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <ErrorMessage>
        The phone number must be between 3 and 20 characters.
      </ErrorMessage>
    );
  }
};

const vCountry = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <ErrorMessage>
        The country name must be between 3 and 20 characters.
      </ErrorMessage>
    );
  }
};

const vPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <ErrorMessage>
        The password must be between 6 and 40 characters.
      </ErrorMessage>
    );
  }
};

const vRole = (value) => {
  if (value === 0 || value === '') {
    return <ErrorMessage>You must provide your role.</ErrorMessage>;
  }
};

const Register = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.message);

  const formRef = useRef();
  const checkBtnRef = useRef();

  const [form, setForm] = useState({
    fullname: '',
    cellphone: '',
    country: '',
    email: '',
    password: '',
    roles: '',
  });

  const [successful, setSuccessful] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);

    formRef.current.validateAll();

    if (checkBtnRef.current.context._errors.length === 0) {
      dispatch(
        register(
          form.fullname,
          form.cellphone,
          form.country,
          form.email,
          form.password,
          [form.roles.trim().toLowerCase()] // ✅ array
        )
      )
        .then(() => setSuccessful(true))
        .catch(() => setSuccessful(false));
    }
  };

  return (
    <MainContainer>
      <Header>Create your acccount</Header>

      <RegisterForm onSubmit={handleRegister} ref={formRef}>
        {!successful && (
          <div>
            <RegisterInput
              placeholder='Full Name'
              name='fullname'
              value={form.fullname}
              onChange={handleChange}
              validations={[required, vFullname]}
            />

            <RegisterInput
              placeholder='Phone Number'
              name='cellphone'
              value={form.cellphone}
              onChange={handleChange}
              validations={[required, vCellphone]}
            />

            <RegisterInput
              placeholder='Country'
              name='country'
              value={form.country}
              onChange={handleChange}
              validations={[required, vCountry]}
            />

            <RegisterInput
              placeholder='Email'
              name='email'
              value={form.email}
              onChange={handleChange}
              validations={[required, email]}
            />

            <RegisterInput
              placeholder='Password'
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              validations={[required, vPassword]}
            />

            <RegisterInput
              placeholder='Role'
              name='roles'
              value={form.roles}
              onChange={handleChange}
              validations={[required, vRole]}
            />

            <RegisterButton>Create Account</RegisterButton>
          </div>
        )}

        {/* Hidden check button */}
        <RegisterButton style={{ display: 'none' }} ref={checkBtnRef} />

        {message?.trim() && (
          <div
            className={
              successful ? 'alert alert-success' : 'alert alert-danger'
            }
            role='alert'
          >
            {message}
          </div>
        )}
      </RegisterForm>
    </MainContainer>
  );
};

export default Register;
