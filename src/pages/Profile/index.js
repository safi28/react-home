import React, { useContext } from "react"
import UserContext from "../../ContextWrapper/User"
import styles from "./profile.module.css"
import ImageUpload from "../../components/ImageUpload"
import GetUserProducts from "../../hooks/getUserProduct"

const Profile = () => {
  const context = useContext(UserContext)
  const { product }  = GetUserProducts()
  const { user, logOut } = context

  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        <img
          src="https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className={styles["header-image"]}
        />
        <div className={styles.header}>
          <h1 className={styles["main-heading"]}>{user.username}</h1>
          <span className={styles["tag"]}>Profile</span>
          <span className={styles.tag}>User</span>
          <div className={styles.stats}>
            <span className={styles["stat-module"]}>
              Your products{" "}
              <span className={styles["stat-number"]}>{product.length}</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles["overlay-header"]}></div>
      <div className={styles.body}>
        <ImageUpload />
        <div className={styles["u-clearfix"]}></div>
        <button onClick={logOut} className={styles.logout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Profile