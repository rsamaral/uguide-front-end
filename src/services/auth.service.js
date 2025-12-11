import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + 'signin', { email, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(fullname, cellphone, country, email, password, roles) {
    return axios
      .post(API_URL + 'signup', {
        fullname,
        cellphone,
        country,
        email,
        password,
        roles,
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default new AuthService();
