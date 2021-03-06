import React from "react"
import styles from "../../styles/interior.module.css"

const Form = (props) => {
  return (
    <div className={styles["all"]}>
      <div className={styles["inter"]}>
        <div onClick={props.previous} className={styles["back-arr"]}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <img
          className={styles.wordmark}
          src="https://chicfetti.com/wp-content/uploads/2018/07/heart-vine.png"
          alt="star wars"
        />
      </div>
      <div className={styles["inter-r"]}>
        <img
          className={styles.helmet}
          src={props.nextSlideStyle.imageUrl}
          alt="helmet"
        />
        <div className={styles.productInfo}>
          <h1>
            {props.nextSlideStyle.name} <br></br> 
          </h1>
          <h2>${props.nextSlideStyle.price}</h2>
          <div className={styles.details}>
            <div className={styles.size}>
              <h4>{props.nextSlideStyle.name} available quantity</h4>
              <p>66</p>
              <p>90</p>
              <p>54</p>
              <p>72</p>
            </div>
            <div className={styles.durability}>
              <h3>{props.nextSlideStyle.durability}%</h3>
              <h4 className={styles["four-durability"]}>
                DURABILITY <br></br> RATE
              </h4>
            </div>
          </div>
          <button onClick={props.onClick} className={styles["int-btn"]}>
            ADD TO CART
          </button>
          <div onClick={props.next} className={styles["back-arr"]}>
            <i className="fa fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Form