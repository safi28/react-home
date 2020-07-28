import React from "react";
import styles from "../../styles/logo.module.css";
import UserContext from "../../ContextWrapper/User";

const Logo = () => {
  const contextValue = React.useContext(UserContext);
  console.log(contextValue);
  const { username } = contextValue;
  // const { username } = user
  console.log(contextValue);
  return (
    <div className={styles["vertical-menu-logo"]}>
      <div>
        <img
          className={styles.image}
          src={require("../../static/images/home-run.png")}
          alt="img"
        />{" "}
        <span>Hi, user</span>
      </div>
      <span className={styles["open-menu-btn"]}>
        <hr></hr>
        <hr></hr>
        <hr />
      </span>
    </div>
  );
};
export default Logo;
