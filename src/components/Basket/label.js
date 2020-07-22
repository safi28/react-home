import React from "react";
import styles from './basketPage.module.css'
const BasketLabel = (props) => {
  return (
    <div className={styles.basket} key={props.index}>
    <img src={props.imageUrl} className={styles.backgroundImg} alt="img" />
    <div className={styles["blog-slider"]}>
      <div className={styles["blog-slider__wrp swiper-wrapper"]}>
        <div className={styles["blog-slider__item swiper-slide"]}>
          <div className={styles["blog-slider__img"]}>
            {/* <img src={props.imageUrl} alt="img" /> */}
          </div>
          <div className={styles["blog-slider__content"]}>
            <span className={styles["blog-slider__code"]}>
              Price: $ {props.price}
            </span>
            <div className={styles["blog-slider__title"]}>
              Products: {props.name}
            </div>
            <div className={styles["blog-slider__text"]}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae voluptate repellendus magni illo ea animi?{" "}
            </div>
            <a href="/" className={styles["blog-slider__button"]}>
              DETAILS
            </a>
          </div>
        </div>
      </div>
      <div className={styles["blog-slider__pagination"]}></div>
    </div>
  </div>
  );
};
export default BasketLabel