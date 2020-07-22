import React from "react";
import styles from "./basketPage.module.css";
import jwt from "jsonwebtoken";
import token from "../../jwtCookie";
import userService from "../../services/user-service";
class BasketPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], nextSlideStyle: {} };
  }
  async getData() {
    if (token) {
      const decodedObject = jwt.verify(token, "secret123");
      const id = decodedObject.userID;
      userService.getUser(id).then((data) => {
        this.setState({ products: data.data.products });
      });
    }
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    const { products } = this.state;
    return products.map((el, index) => {
      console.log(index);
      return (
        <div className={styles.basket} key={index}>
          <img src={el.imageUrl} className={styles.backgroundImg} alt="img" />
          <div className={styles["blog-slider"]}>
            <div className={styles["blog-slider__wrp swiper-wrapper"]}>
              <div className={styles["blog-slider__item swiper-slide"]}>
                <div className={styles["blog-slider__img"]}>
                  <img src={el.imageUrl} alt="img" />
                </div>
                <div className={styles["blog-slider__content"]}>
                  <span className={styles["blog-slider__code"]}>
                    Price: $ {el.price}
                  </span>
                  <div className={styles["blog-slider__title"]}>
                    Products: {el.name}
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
    });
  }
}
export default BasketPage;
