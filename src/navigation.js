import React, { Component, Suspense } from "react"
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom"
import render from "./utils/render"
import UserContext from "./ContextWrapper/User"
import Loader from './components/Loader/Loader'
const SignInPage = React.lazy(() => import("./pages/Authentication/SignIn")) 
const SignUpPage = React.lazy(() => import("./pages/Authentication/SignUp"))   
const Interior = React.lazy(() => import( "./pages/InteriorDesign")) 
const BuyProductPage = React.lazy(() => import("./pages/BuyProductPage"))
const BasketPage = React.lazy(() => import("./pages/Basket")) 
const NotFound = React.lazy(() => import("./components/Error/404"))
const NotFoundCmp = React.lazy(() => import( "./components/Error/404.2"))
const Footer = React.lazy(() => import( "./components/Footer"))
const NavigatePage = React.lazy(() => import( "./components/NavigationBar"))
const HomePage = React.lazy(() => import( "./pages/HomePages"))
const AutomationPage = React.lazy(() => import( "./pages/HomeAutomation"))
const Profile = React.lazy(() => import("./pages/Profile"))
class Navigation extends Component {
  static contextType = UserContext
  render() {
    const { user, logIn } = this.context
    const isLogged = user && user.isLogged
    return (
      <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <NavigatePage />
        <Switch>
          <Route path="/" exact component={render(HomePage, isLogged)} />
          <Route
            path="/api/user/signin"
            component={
              !isLogged
                ? render(SignInPage, { isLogged, login: logIn })
                : () => <Redirect to="/" /> } />
          <Route
            path="/api/user/signup"
            render={
              !isLogged
                ? render(SignUpPage, { isLogged })
                : () => <Redirect to="/" /> } />
          <Route
            path="/api/products/interior"
            render={
              isLogged
                ? render(Interior, { isLogged })
                : () => <Redirect to="/" /> } />
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
                : () => <Redirect to="/" />  } />
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
            <Route> {isLogged ? <NotFound /> : <NotFoundCmp /> }</Route>
        </Switch>
        <Footer />
      </BrowserRouter>
     </Suspense>
   )
  }
}
export default Navigation   
