import React from "react";
import styles from "../styles/card.module.css";
const CardLabel = (props) => {
  return (
    <div className={styles[props.mainStyle]}>
      <img className={styles[props.classImage]} src={props.image} alt="img" />
      <button className={styles["button"]}>Check Now</button>
      <h1 className={styles[props.text]}>
        {props.title}<hr className={styles[props.hr]}></hr>{" "}
        <p className={styles[props.p]}>
          <span className={styles[props.span]}>Checkout our designs</span>
          <img className={styles[props.arrow]} src={props.icon} alt="img" />
        </p>
      </h1>
    </div>
  );
};

export default CardLabel