import React from "react"
import styles from "../../../styles/card.module.css"
import Button from "../../../components/Button"
const CardLabel = (props) => {
  return (
    <div className={styles[props.mainStyle]}>
      <img className={styles[props.classImage]} src={props.image} alt="img" />
      <Button linkTo={props.linkTo} title={"Check now"} className={styles.button} />
      <h1 className={styles[props.text]}>
        {props.title}
        <hr className={styles[props.hr]}></hr>{" "}
        <p className={styles[props.p]}>
          <span className={styles[props.span]}>Checkout our designs</span>
          <img className={styles[props.arrow]} src={props.icon} alt="img" />
        </p>
      </h1>
    </div>
  )
}
export default CardLabel
