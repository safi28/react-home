import React from "react";
import styles from "../../styles/buy.module.css";

const CreditCard = (props) => {
  return (
    <header className={styles.header}>
      <h1>${props.price}</h1>
      <div className={styles["card-type"]}>
        <a className={styles["card active"]} href="/">
          <img src={props.imgSrc} alt='img' />
        </a>
      </div>
    </header>
  );
};
export default CreditCard;
