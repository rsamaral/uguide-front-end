import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class AuthService {
  async login(email, password) {
    const response = await axios.post(`${API_URL}/signin`, { email, password });

    const user = response.data;

    if (user?.accessToken) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    return user;
  }

  logout() {
    localStorage.removeItem('user');
  }

  async register(fullname, cellphone, country, email, password, roles) {
    return axios.post(`${API_URL}/signup`, {
      fullname,
      cellphone,
      country,
      email,
      password,
      roles,
    });
  }
}

export default new AuthService();
