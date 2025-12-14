import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from './types';

import AuthService from '../../services/auth.service';

// Helper to guarantee we always return a string message
const getErrorMessage = (error) => {
  const raw =
    (error?.response && error.response.data && error.response.data.message) ||
    error?.message ||
    error?.toString() ||
    'An unexpected error occurred.';

  if (typeof raw === 'string') {
    return raw;
  }

  try {
    return JSON.stringify(raw);
  } catch {
    return 'An unexpected error occurred.';
  }
};

export const register =
  (fullname, cellphone, country, email, password, roles) => (dispatch) => {
    return AuthService.register(
      fullname,
      cellphone,
      country,
      email,
      password,
      roles
    ).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.message,
        });

        return Promise.resolve();
      },
      (error) => {
        const message = getErrorMessage(error);

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = getErrorMessage(error);

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
