import React from "react";
import styles from "./loader.module.css";
function ShowDetail() {
  return (
    <div className={styles["loader-center"]}>
      <span className={styles.fa}>
        <img
          className={styles.gif}
          src={"https://cdn.lowgif.com/full/dc86e54ceca03be4-loading-spinner-animated-gif-83320-mediabin.gif"}
          role='img'
          alt="loader"
        />
      </span>
      <img
          alt="loader"
          src={'https://i.gifer.com/ZZ5H.gif'} 
        />
    </div>
  );
}
export default ShowDetail;