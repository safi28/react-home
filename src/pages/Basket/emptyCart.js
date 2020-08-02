import React from "react";
import styles from "../../styles/basketPage.module.css";
import CartLayout from "../../components/Cart";

const EmptyCartPage = () => {
  return (
    <CartLayout>
      <h2 className={styles.empty}>You don't have products yet</h2>
      <img
        className={styles.emptyIcon}
        src={require("../../static/images/box.png")}
        alt="img"
      />
    </CartLayout>
  );
};
export default EmptyCartPage;
