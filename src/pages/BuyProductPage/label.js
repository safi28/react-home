import React from "react";
import styles from "../../styles/buy.module.css";
import Input from "../../components/Input/Input";
import CreditCard from "./creditCard";
import DivLabel from "./divLabel";

const Label = (props) => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <form className={styles.modal}>
          <header className={styles.header}>
            <h1>Payment of ${props.price}</h1>
            <div className={styles["card-type"]}>
              <CreditCard imgSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Amex.png" />
              <CreditCard imgSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Discover.png" />
              <CreditCard imgSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Visa.png" />
            </div>
          </header>
          <div className={styles.content}>
            <div className={styles.form}>
              <DivLabel label="Name of product" placeholder={props.name} />
              <DivLabel label="RATE%" placeholder={props.durability} />
              <div className={styles["form-row"]}>
                <div className={styles["input-group"]}>
                  <label htmlFor="">Expiry Date</label>
                  <Input
                    type="text"
                    placeholder="name"
                    isDisabled={true}
                  />{" "}
                </div>
                <div className={styles["input-group"]}>
                  <label htmlFor="">Price</label>
                  <Input
                    type="text"
                    placeholder={props.price}
                    isDisabled={true}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <button className={styles.button} onClick={props.onClick}>
              Payment
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};
export default Label;