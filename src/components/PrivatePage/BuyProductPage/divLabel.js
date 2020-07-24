import React from "react"
import styles from "../styles/buy.module.css"
import Input from "../../Authentication/Input"
const DivLabel = (props) => {
  return (
    <div className={styles["form-row"]}>
      <div className={styles["input-group"]}>
        <label htmlFor="">{props.label}</label>
        <Input placeholder={props.placeholder} isDisabled={true} />
      </div>
    </div>
  )
}
export default DivLabel