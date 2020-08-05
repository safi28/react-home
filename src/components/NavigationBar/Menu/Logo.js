import React from "react";
import styles from "../../../styles/logo.module.css";
import { Link } from "react-router-dom";
import GetImage from "../../ImageGetter";

const Logo = () => {
  const { image } = GetImage();

  return (
    <div className={styles["vertical-menu-logo"]}>
      <div>
        {image ? (
          <img className={styles.image} src={image} alt="img" />
        ) : (
          <img
            className={styles.image}
            src={require("../../../static/images/home-run.png")}
            alt="img"
          />
        )}
      </div>
      <span className={styles["open-menu-btn"]}>
        <Link to="/api/user/profile">
          <span>
            <hr /> Profile <hr />
          </span>
        </Link>
      </span>
    </div>
  );
};
export default Logo;
