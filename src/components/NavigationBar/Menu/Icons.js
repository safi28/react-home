import React from "react";
import styles from "../../../styles/icon.module.css";

const Icons = (props) => {
  return (
    <li className={styles["dash-li"]}>
      <img className={styles["icon-image"]} src={props.image} alt="img" />
      <i>{props.name}</i>
    </li>
  );
};

export default Icons