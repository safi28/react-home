import React, { useContext } from "react";
import UserContext from "../../ContextWrapper/User";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";
const Profile = () => {
  const context = useContext(UserContext);
  const { user, logOut } = context;
  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        <img
          src="https://s17.postimg.cc/ypm5ye95r/image.jpg"
          alt=""
          className={styles["header-image"]}
        />
        <div className={styles.header}>
          <h1 className={styles["main-heading"]}>{user.username}</h1>
          <span className={styles["tag"]}>Profile</span>
          <span className={styles.tag}>User</span>
          <div className={styles.stats}>
            <span className={styles["stat-module"]}>
              Interior Design products{" "}
              <span className={styles["stat-number"]}>56</span>
            </span>
            <span className={styles["stat-module"]}>
              Smart Home products <span className="stat-number">29</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles["overlay-header"]}></div>
      <div className={styles.body}>
        <img
          src="https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png"
          alt="Hugh Jackman"
          className={styles["body-image"]}
        />
        <div className={styles["body-action-button u-flex-center"]}>
          <svg
            fill="#ffffff"
            height="28"
            viewBox="0 0 24 24"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
        <div className={styles["u-clearfix"]}></div>
        <button onClick={logOut} className={styles.logout}>Logout</button>
      </div>
    </div>
  );
};
export default Profile;
