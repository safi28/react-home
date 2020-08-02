import React, { useContext } from "react";
import styles from "./basket.module.css";
import UserContext from "../../../ContextWrapper/User";
import { Link } from "react-router-dom";
const Basket = () => {
  const context = useContext(UserContext);
  const { user } = context;
  return (
    <>
      <Link to={`/api/user/basket/${user.id}`}>
        <img
          className={styles["basket"]}
          src={require("../../../static/images/product.png")}
          alt="img"
        />
      </Link>
    </>
  );
};
export default Basket;
