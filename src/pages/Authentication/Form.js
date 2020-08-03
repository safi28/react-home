import React from "react";
import styles from "./style.module.css";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";

const FormLabel = (props) => {
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.header}>
          <h2 className={styles["animation a1"]}>
            {props.title}
            {props.emoji}
          </h2>
          <h4 className={styles["animation a2"]}>{props.secondTitle}</h4>
        </div>
        <div className={styles.form}>
          <Input
            type="username"
            placeholder="Username"
            onChange={props.usernameOnChangeHandler}
            error={props.usernameError}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={props.passwordOnChangeHandler}
            error={props.passwordError}
          />
          {props.isRegister ? (
            <Input
              type="password"
              placeholder="Repeat Password"
              onChange={props.repeatPasswordOnChangeHandler}
              error={props.repeatPasswordError}
            />
          ) : (
            ""
          )}
          <button onClick={props.onClick} className={styles["animation a6"]}>
            {props.btnTitle}
          </button>
        </div>
        <h5>{props.textNavigator}</h5>
        <Link className={styles.link} to={props.link}>
          {props.navigate}
        </Link>
      </div>
      <div className={styles[props.slide]}>
        <p className={styles[props.slideText]}>Welcome</p>
      </div>
    </div>
  );
};
export default FormLabel;