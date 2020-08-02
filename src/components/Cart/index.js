import React from "react";
import styles from "../../styles/basketPage.module.css";

const CartLayout = (props) => {
  return <div className={styles.basket}>
    <h1 className={styles.text}>
      Your list of products
      <img
        className={styles.icon}
        src={require("../../static/images/purchase.png")}
        alt="img"
      />
    </h1>
    {props.children}
  </div>;
};
export default CartLayout
