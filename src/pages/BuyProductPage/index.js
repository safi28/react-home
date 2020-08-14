import React from "react";
import Label from "./label";

class BuyProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.location.state.state,
    }
  }
  onClick = () => {
     return this.props.history.push('/')
  };
  render() {
    const { product } = this.state;
    return (
      <Label
        name={product.name}
        price={product.price}
        durability={product.durability}
        onClick={this.onClick}
      />
    );
  }
}
export default BuyProductPage;