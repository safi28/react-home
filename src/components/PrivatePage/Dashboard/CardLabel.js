import React from "react";
import styles from "../styles/card.module.css";
import { Link } from "react-router-dom";
const CardLabel = (props) => {
  return (
    <div className={styles[props.mainStyle]}>
      <img className={styles[props.classImage]} src={props.image} alt="img" />
      <Link to="/api/products/interior">
        <button className={styles["button"]}>Check Now</button>
      </Link>
      <h1 className={styles[props.text]}>
        {props.title}
        <hr className={styles[props.hr]}></hr>{" "}
        <p className={styles[props.p]}>
          <span className={styles[props.span]}>Checkout our designs</span>
          <img className={styles[props.arrow]} src={props.icon} alt="img" />
        </p>
      </h1>
    </div>
  );
};
export default CardLabel;
