import React, { Component } from "react"
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom"
import render from "./utils/render"
import UserContext from "./ContextWrapper/User"
import SignInPage from "./pages/Authentication/SignIn"
import SignUpPage from "./pages/Authentication/SignUp"
import Interior from "./pages/InteriorDesign"
import BuyProductPage from "./pages/BuyProductPage"
import BasketPage from "./pages/Basket"
import NotFound from "./components/Error/404"
import NotFoundCmp from "./components/Error/404.2"
import Footer from "./components/Footer"
import NavigatePage from "./components/NavigationBar"
import HomePage from "./pages/HomePages"
import AutomationPage from "./pages/HomeAutomation"
import Profile from "./pages/Profile"

class Navigation extends Component {
  static contextType = UserContext
  render() {
    const { user, logIn } = this.context
    const isLogged = user && user.isLogged
    console.log(isLogged)
    return (
      <BrowserRouter>
        <NavigatePage />
        <Switch>
          <Route path="/" exact component={render(HomePage, isLogged)} />
          <Route
            path="/api/user/signin"
            component={
              !isLogged
                ? render(SignInPage, { isLogged, login: logIn })
                : () => <Redirect to="/" /> }  />
          <Route
            path="/api/user/signup"
            render={
              !isLogged
                ? render(SignUpPage, { isLogged })
                : () => <Redirect to="/" />  } />
          <Route
            path="/api/products/interior"
            render={
              isLogged
                ? render(Interior, { isLogged })
                : () => <Redirect to="/" />  }  />
            <Route
             path="/api/products/smart"
             render={
               isLogged
                 ? render(AutomationPage, { isLogged })
                 : () => <Redirect to="/" /> } />
          <Route
            path="/api/products/buy"
            render={
              isLogged
                ? render(BuyProductPage, { isLogged })
                : () => <Redirect to="/" />  }  />
          <Route
            path="/api/user/basket/:userid"
            render={
              isLogged 
               ? render(BasketPage, { isLogged })
               : () => <Redirect to="/" /> } />
          <Route
            path="/api/user/profile"
             render={
               isLogged
                 ? render(Profile, { isLogged })
                 : () => <Redirect to="/" /> } />
           {isLogged ? (
            <Route component={NotFound} />
          ) : (
            <Route component={NotFoundCmp} />
          )}
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}
export default Navigation