import axios from "axios";

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
  getUser: (id) => {
    return axios.get(`http://localhost:9999/api/user/interior/${id}`);
  },
  register: (newUser) => {
    return axios.post("http://localhost:9999/api/user/register", newUser);
  }
};
export default userService;
