import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getTouristBoard() {
    return axios.get(API_URL + 'turista', { headers: authHeader() });
  }

  getGuideBoard() {
    return axios.get(API_URL + 'guia', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();