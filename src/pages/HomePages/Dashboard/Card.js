import React from "react";
import styles from "../../../styles/card.module.css";
import CardLabel from './CardLabel'
const Card = () => {
  return (
    <div className={styles["select-two"]}>
      <div className={styles.content}>
        <div className={styles.card}>
          <p>.</p>
          <CardLabel
            mainStyle="box"
            classImage="intr"
            image="https://cdn.dribbble.com/users/93860/screenshots/9710223/media/dfa76676fcbb139505556fd75b40de69.gif"
            text="interior-text"
            title="Interior Design"
            linkTo="/api/products/interior"
            hr="interior-hr"
            p="interior-p"
            span="interior-span"
            arrow="arrow-image"
            icon={require("../../../static/images/next.png")}
          />
          <CardLabel
            mainStyle="box-second"
            classImage="intr"
            image="https://i.pinimg.com/originals/c3/a6/cb/c3a6cbbc1e1d5fed032ea0a49bb9f545.gif"
            text="smart-text"
            linkTo='/api/products/smart'
            title="Smart Home"
            hr="smart-hr"
            p="smart-p"
            span="smart-span"
            arrow="smart"
            icon={require("../../../static/images/return.png")}
          />
        </div>
      </div>
    </div>
  );
};
export default Card;
