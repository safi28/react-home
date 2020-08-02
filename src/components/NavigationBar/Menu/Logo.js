import React from "react";
import styles from "../../../styles/logo.module.css";

const Logo = () => { 
  return (
    <div className={styles["vertical-menu-logo"]}>
      <div>
        <img
          className={styles.image}
          src={require("../../../static/images/home-run.png")}
          alt="img"
        />{" "}
      </div>
      <span className={styles["open-menu-btn"]}>
        
      <span>   <hr /> Profile <hr /></span>
      </span>
    </div>
  );
};
export default Logo;
