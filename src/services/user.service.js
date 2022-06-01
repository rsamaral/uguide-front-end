import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://192.168.25.24:8080/api/auth/";

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