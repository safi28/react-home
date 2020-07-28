import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import render from "./render"
import UserContext from "./ContextWrapper/User"
import Header from "./components/Header"
import Menu from "./components/Menu/Menu"
import Dashboard from "./pages/Dashboard"
import Slider from "./pages/PublicPage/Slider"
import SignInPage from "./pages/Authentication/SignIn"
import SignUpPage from "./pages/Authentication/SignUp"
import Logout from "./pages/Authentication/Logout"
import Interior from "./pages/InteriorDesign"
import BuyProductPage from "./pages/BuyProductPage"
import BasketPage from "./pages/Basket"
import NotFound from "./components/Error/404"
import NotFoundCmp from "./components/Error/404.2"
import Footer from "./components/Footer"

class Navigation extends Component {
  static contextType = UserContext
  render() {
    const { isLogged, user, logIn, logOut } = this.context
    console.log(this.context)
    return (
      <div className="App">
        {!isLogged && !user ? (
          <Header isLogged={isLogged} />
        ) : (
          <Menu isLogged={isLogged} user={'user'} />
        )}
        <Switch>
          <Route
            path="/"
            exact
            component={
              isLogged
                ? render(Dashboard, { isLogged })
                : render(Slider, { isLogged }) } />
          <Route
            path="/signin"
            component={
              !isLogged
                ? render(SignInPage, { isLogged, login: logIn })
                : () => <Redirect to="/" /> }  />
          <Route
            path="/register"
            render={
              !isLogged
                ? render(SignUpPage, { isLogged })
                : () => <Redirect to="/" /> } />
          <Route
            path="/logout"
            render={render(Logout, { isLogged, logout: logOut })} />
          {/* <Route path="/profile/:userid" component={Profile} /> */}
          <Route
            path="/api/products/interior"
            render={render(Interior, { isLogged })} />
          <Route
            path="/api/products/buy"
            render={render(BuyProductPage, { isLogged })} />
          <Route
            path="/api/user/basket/:id"
            render={render(BasketPage, { isLogged })} />
          {isLogged ? (
            <Route component={NotFound} />
          ) : (
            <Route component={NotFoundCmp} /> )}
        </Switch>
        <Footer />
      </div>
    )
  }
}
export default Navigation