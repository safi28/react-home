import React from "react"
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
import BasketPage from "../components/Basket"
import parseCookeis from "../parseCookies"
import jwt from "jsonwebtoken"
import token from "../jwtCookie"

class App extends React.Component {
  constructor(props) {
    super(props)
    const cookies = parseCookeis()
    const isLogged = !!cookies["auth_cookie"]
    this.state = { isLogged, user: '' }
  }
  login = (history, data) => {
    return userService.login(data).then(async (data) => {
      if (data.ok) {
        this.setState({ isLogged: true })
        history.push("/")
      }
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
    const { isLogged } = this.state
    let user = ''
    if (token !== undefined) {
      const decodedObj= jwt.verify(token, "secret123")
      user = decodedObj.username
    }
    return (
      <div className="App">
        {!isLogged ? (
          <Header isLogged={isLogged} />
        ) : (
          <Menu isLogged={isLogged} user={user} />
        )}
        <Switch>
          <Route
            path="/"
            exact
            component={
              isLogged
                ? render(Dashboard, { isLogged })
                : render(Slider, { isLogged })  }  />
          <Route
            path="/signin"
            component={
              !isLogged
                ? render(SignIn, { isLogged, login: this.login })
                : () => <Redirect to="/" />  } />
          <Route
            path="/register"
            render={
              !isLogged
                ? render(Register, { isLogged })
                : () => <Redirect to="/" />   } />
          <Route
            path="/logout"
            render={render(Logout, { isLogged, logout: this.logout })} />
          <Route path="/profile/:userid" component={ Profile } />
          <Route path="/interior" render={render(Interior, { isLogged })} />
          <Route path="/addTo" render={render(AddToPage, { isLogged })} />
          <Route path="/api/user/basket/:id" render={render(BasketPage, { isLogged })} />
          {isLogged ? (
            <Route component={NotFound} />
          ) : (
            <Route component={notFoundCmp} />  )}
        </Switch>
        <Footer />
      </div>
    )
  }
}
export default App