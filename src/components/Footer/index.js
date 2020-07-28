import React from "react";
import styles from "./style.module.css";
const Footer = () => {
  return (
    <footer className={styles['main-footer']}>
      <article>
        <h3>Informing</h3>
        <p>
          <i className="fa fas fa-street-view"></i>
          Location
        </p>
        <p>
          <i className="fa fa-phone-square"></i>
          Call us
        </p>
        <p>
          <i className="fa fa-clock-o"></i>
          Entry time
        </p>
        <span id={styles["social"]}>
          <i className="fa fa-clock-o"></i>
          <i className="fa fab fa-twitter"></i>
          <i className="fa fab fa-linkedin"></i>
          <i className="fa fab fa-youtube"></i>
        </span>
      </article>
      <article>
        <h3>Extra links</h3>
        <p><i className="fa fa-question-circle" aria-hidden="true"></i>Questions?</p>
        <p><i className="fa fa-address-card" aria-hidden="true"></i>Address card</p>
      </article>
    </footer>
  );
};
export default Footer;
