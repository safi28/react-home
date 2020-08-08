import React from "react";
import styles from "./input.module.css";

const Input = (props) => {
  return (
    <>
      <input
        type = {props.type}
        className={styles["form-field"]}
        placeholder={props.placeholder}
        onChange={props.onChange}
        disabled={props.isDisabled}
      />
      {props.error && <div className="error">{props.error}</div>}
    </>
  );
};
export default Input;