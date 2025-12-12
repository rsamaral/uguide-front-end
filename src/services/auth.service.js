// src/services/auth.service.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth'; // no trailing slash

class AuthService {
  async login(email, password) {
    const response = await axios.post(`${API_URL}/signin`, { email, password });

    const user = response.data;

    // Save user in localStorage so auth state persists across refreshes
    if (user?.accessToken) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    return user; // 👈 the action will get the *user*, not axios response
  }

  logout() {
    localStorage.removeItem('user');
  }

  async register(fullname, cellphone, country, email, password, roles) {
    const normalizedRoles = (Array.isArray(roles) ? roles : [roles]).map((r) =>
      r.toLowerCase()
    );

    const response = await axios.post(`${API_URL}/signup`, {
      fullname,
      cellphone,
      country,
      email,
      password,
      roles: normalizedRoles,
    });

    return response.data;
  }
}

export default new AuthService();
