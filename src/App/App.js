import React from "react"
import "./App.css"
import userService from "../services/user-service"
import UserContext from "../ContextWrapper/User"
function parseCookies() {
  return document.cookie.split(" ").reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split("=")
    acc[cookieName] = cookieValue
    return acc
  }, {})
}
class App extends React.Component {
  constructor(props) {
    super(props)
    const cookies = parseCookies()
    console.log(cookies)
    const isLogged = !!cookies["auth_cookie"]
    this.state = { isLogged, user: null }
  }
  login = (user) => {
    this.setState({
      isLogged: true,
      user,
    })
  }
  logout = (history) => {
    document.cookie = "auth_cookie= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    this.setState({ isLogged: false, user: null })
    history.push("/")
    return null
  }
  componentDidMount() {
    const token = parseCookies()
    fetch("http://localhost:9999/api/user/verify", {
      method: "POST",
      body: JSON.stringify({
        token: token,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((promise) => {
        return promise.json()
      })
      .then((response) => {
        if (response.status) {
          this.login({
            username: response.user.username,
            id: response.user._id,
          })
          return
        } else {
          this.logout()
        }
      })
  }
  render() {
    const { isLogged, user } = this.state
    return (
      <UserContext.Provider
        value={{
          isLogged,
          user,
          logIn: this.login,
          logOut: this.logout,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
export default App
