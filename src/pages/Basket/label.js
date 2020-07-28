import React from "react"
import styles from "./styles/basketPage.module.css"
import { useHistory } from "react-router-dom"
const BasketLabel = (props) => {
  const history = useHistory()
  const buyProduct = () => {
    history.push('/api/products/buy', {state: props.product})
  }
  return (
    <div className={styles.basket}>
      <h1 className={styles.text}>
        Your list of products
        <img
          className={styles.icon}
          src={require("../../static/images/purchase.png")}
          alt="img"
        />
      </h1>
      {!props.empty ? (
        <>
          <img
            src={props.imageUrl}
            className={styles.backgroundImg}
            alt="img"
          />
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
                    Products: {props.name}
                  </div>
                  <div className={styles["blog-slider__text"]}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae voluptate repellendus magni illo ea animi?{" "}
                  </div>
                  <button onClick={buyProduct} className={styles["blog-slider__button"]}>
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
        </>
      ) : (
        <>
          <h2 className={styles.empty}>You don't have products yet</h2>
          <img
            className={styles.emptyIcon}
            src={require("../../static/images/box.png")}
            alt="img"
          />
        </>
      )}
    </div>
  )
}
export default BasketLabel