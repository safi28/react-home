import React from "react"
import styles from "../styles/basket.module.css"
import { Link } from "react-router-dom"
import token from "../../../jwtCookie"
import jwt from "jsonwebtoken"
const Basket = () => {
  let id
  if (token) {
    const decodedObject = jwt.verify(token, "secret123")
    id = decodedObject.userID
  }
  return (
    <>
      <Link to={`/api/user/basket/${id}`}>
        <img
          className={styles["basket"]}
          src={require("../../../static/images/product.png")}
          alt="img"
        />
      </Link>
    </>
  )
}
export default Basket