import React from "react";
import CartLayout from "../../components/Cart";
import styles from '../../styles/basketPage.module.css'
const BasketLabel = (props) => {
  return (
    <CartLayout>
      <img src={props.imageUrl} className={styles.backgroundImg} alt="img" />
      <div className={styles["blog-slider"]}>
        <div className={styles["blog-slider__wrp swiper-wrapper"]}>
          <div className={styles["blog-slider__item swiper-slide"]}>
            <div className={styles["blog-slider__img"]}>
              <img src={props.imageUrl} alt="img" />
            </div>
            <div className={styles["blog-slider__content"]}>
              <span className={styles["blog-slider__code"]}>
                Price: $ {props.price}
              </span>
              <div className={styles["blog-slider__title"]}>
                Product: {props.name}
              </div>
              <div className={styles["blog-slider__text"]}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?{" "}
              </div>
              <button
                onClick={props.onClick}
                className={styles["blog-slider__button"]}
              >
                BUY
              </button>
            </div>
          </div>
        </div>
        <div onClick={props.next} className={styles["back-arr"]}>
          <i className="fa fa-arrow-right"></i>
        </div>
        <div className={styles["blog-slider__pagination"]}></div>
      </div>
    </CartLayout>
  );
};
export default BasketLabel;