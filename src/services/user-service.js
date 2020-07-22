import axios from "axios"

const userService = {
  home: () => {
    return fetch("http://localhost:9999/api/user", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        credentials: "include",
      },
    })
  },
  getUser: (id) => {
    return axios.get(`http://localhost:9999/api/user/user/${id}`)
  },
  register: (newUser) => {
    return axios.post("http://localhost:9999/api/user/register", newUser)
  },
  login: (user) => {
    return fetch("http://localhost:9999/api/user/signin", {
      body: JSON.stringify(user),
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
  },
  logout: () => {
    return fetch("http://localhost:9999/api/user/logout", {
      method: "POST",
      credentials: "include",
    }).then((res) => res.text())
  },
}
export default userService
