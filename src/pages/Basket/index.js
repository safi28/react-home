import React from "react";
import jwt from "jsonwebtoken";
import token from "../../jwtCookie";
import userService from "../../services/user-service";
import BasketLabel from "./label";
import Loader from "../../components/Loader/Loader";
class BasketPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentSlide: 0,
      increment: 0,
      empty: false,
    };
  }
  async getData() {
    if (token) {
      const decodedObject = jwt.verify(token, "secret123");
      const id = decodedObject.userID;
      userService.getUser(id).then((data) => {
        if (data.data.products.length < 1) {
          this.setState({ empty: true });
        } else {
          this.setState({ products: data.data.products });
        }
      });
    }
  }
  increase = () => {
    if (this.state.currentSlide === this.state.products.length - 1) {
      this.setState({ currentSlide: 0 });
    } else {
      this.setState({ currentSlide: this.state.currentSlide + 1 });
    }
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    let { products, currentSlide, empty } = this.state;
    let el = "";
    let next = 0;
    if (products.length > 0) {
      if (currentSlide === products.length - 1) {
        next = 0;
      } else {
        next = currentSlide + 1;
      }
      el = products[next]
    }
    if (this.state.products.length <= 0 && empty == false) {
      return <Loader />;
    }
    return (
      <BasketLabel
        next={this.increase}
        name={el.name}
        imageUrl={el.imageUrl}
        price={el.price}
        empty={empty}
        product={el}
      />
    );
  }
}
export default BasketPage;