import React from "react"
import Slideshow from "./Slideshow"
import Basket from "../Basket/BasketLogo"
import styles from "../../styles/interior.module.css"
const Interior = () => {
  return (
    <>
      <Basket />
      <h2 className={styles["our-products"]}>Our products:</h2>
      <Slideshow />
    </>
  )
}
export default Interior
