import axios from "axios";
import getCookie from "../utils/getCookie";

const userService = {
  home: () => {
    return fetch("http://localhost:9999/api/user", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        credentials: "include",
      },
    });
  },
  userInfo: async (id) => {
    const response = await fetch(`http://localhost:9999/api/user/info/${id}`, {
      headers: {
        "Content-type": "multipart/form-data",
        'Authorization': getCookie('auth_cookie')
      },
    })
    return response.json()
  },
  getUser: (id) => {
    return axios.get(`http://localhost:9999/api/user/interior/${id}`);
  },
  register: (newUser) => {
    return axios.post("http://localhost:9999/api/user/register", newUser);
  }
};
export default userService;
