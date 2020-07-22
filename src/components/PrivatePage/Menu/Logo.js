import React from "react";
import styles from "../styles/logo.module.css";

const Logo = ({username}) => {
  return (
    <div className={styles["vertical-menu-logo"]}>
      <div>
        <img
          className={styles.image}
          src={require("../../../static/images/home-run.png")}
          alt="img"
        />{" "}
        <span>Hi, {username}</span>
      </div>
      <span className={styles["open-menu-btn"]}>
        <hr></hr>
        <hr></hr>
        <hr />
      </span>
    </div>
  );
};
export default Logo
