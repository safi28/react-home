import React, { Suspense } from "react"
import "./App.css"
import Menu from "../components/PrivatePage/Menu/Menu"
import Slider from "../components/PublicPage/Slider"
import Dashboard from "../components/PrivatePage/Dashboard/Dashboard"
import { Switch, Redirect, Route } from "react-router-dom"
import SignIn from "../components/Authentication/SignIn/SignInLabel"
import Logout from "../components/Authentication/Logout"
import Register from "../components/Authentication/SignUp"
import render from "./render"
import userService from "../services/user-service"
import Interior from "../components/PrivatePage/InteriorDesign"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NotFound from "../components/Error/404"
import notFoundCmp from "../components/Error/404.2"
import Profile from "../components/Profile"
import AddToPage from "../components/PrivatePage/AddToCard"

function parseCookeis() {
  return document.cookie.split(" ").reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split("=")
    acc[cookieName] = cookieValue
    return acc
  }, {})
}
class App extends React.Component {
  constructor(props) {
    super(props)
    const cookies = parseCookeis()
    const isLogged = !!cookies["auth_cookie"]
    this.state = { isLogged, username: undefined }
  }
  login = (history, data) => {
    return userService.login(data).then(() => {
      this.setState({ isLogged: true })
      history.push("/")
    })
  }
  logout = (history) => {
    userService.logout().then(() => {
      this.setState({ isLogged: false })
      history.push("/")
      return null
    })
  }
  render() {
    const { isLogged, username } = this.state
    console.log(username)
    return (
      <div className="App">
        {!isLogged ? (
          <Header isLogged={isLogged} />
        ) : (
          <Menu isLogged={isLogged} user={username} />
        )}
        <Switch>
          <Route
            path="/"
            exact
            component={
              isLogged
                ? render(Dashboard, { isLogged })
                : render(Slider, { isLogged })
            }
          />
          <Route
            path="/signin"
            component={
              !isLogged
                ? render(SignIn, { isLogged, login: this.login })
                : () => <Redirect to="/" />
            }
          />
          <Route
            path="/register"
            render={
              !isLogged
                ? render(Register, { isLogged })
                : () => <Redirect to="/" />
            }
          />
          <Route
            path="/logout"
            render={render(Logout, { isLogged, logout: this.logout })}
          />
          <Route path="/profile/:userid" component={Profile} />
          <Route path="/interior" render={render(Interior, { isLogged })} />
          <Route
            path="/addTo"
            render={render(AddToPage, {isLogged})}
          />
          {isLogged ? (
            <Route component={NotFound} />
          ) : (
            <Route component={notFoundCmp} />
          )}
        </Switch>
        <Footer />
      </div>
    )
  }
}
export default App