import React from "react";
import styles from "./style.module.css";
import Link from "../../../shared/Link/Link";
const Header = ({ isLogged }) => {
  return (
      <div>
        <header className={styles.navigation}>
          <img
            className={styles.image}
            src={require("../../../static/images/home-run.png")}
            alt="img" />
          <ul>
            <Link to="/">Home</Link>
            {!isLogged && <Link to="/signin">Sign In</Link>}
            {!isLogged && <Link to="/register">SignUp</Link>}
          </ul>
        </header>
        <div id={styles["outer-circle"]}></div>
      </div>
  );
};
export default Header;