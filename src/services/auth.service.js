import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", { email, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  cadastro(fullname, cellphone, country, email, password, roles) {
    return axios.post(API_URL + "signup", {
      fullname,
      cellphone,
      country,
      email,
      password,
      roles
    });
  }
}

export default new AuthService();