import React, { useContext } from "react";
import UserContext from "../../ContextWrapper/User";
import Header from "./Header";
import Menu from "./Menu/Menu";

const NavigatePage = () => {
  const context = useContext(UserContext);
  const { user } = context;
  const isLogged = user && user.isLogged;
  console.log(user);
  return isLogged ? <Menu /> : <Header />;
};
export default NavigatePage