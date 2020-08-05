import React, { useContext } from "react";
import UserContext from "../../ContextWrapper/User";
import Slider from "./PublicPage/Slider";
import Dashboard from "./Dashboard/index";

const HomePage = () => {
  const context = useContext(UserContext);
  const { user } = context;
  const isLogged = user && user.isLogged;
  return isLogged ? <Dashboard /> : <Slider />;
};
export default HomePage