import axios from "axios";

const userService = {
  home: () => {
    return fetch("http://localhost:9999/auth", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        credentials: "include",
      },
    })
  },
  register: (newUser) => {
   return axios
    .post("http://localhost:9999/register", newUser)
  },
  login: (user) => {
    return fetch("http://localhost:9999/signin", {
      body: JSON.stringify(user),
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    })
  },
  logout: () => {
    return fetch("http://localhost:9999/logout", {
      method: "POST",
      credentials: "include",
    }).then((res) => res.text())
  },
}
export default userService