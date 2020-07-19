import React from "react";
import styles from "../styles/buy.module.css";
import productService from "../../../services/product-service";
import withForm from "../../../shared/hoc/withForm";
import Input from "../../Authentication/Input";

class AddToPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }
  nameOnChangeHandler = this.props.controlChangeHandlerFactory("name");

  submitHandler = (e) => {
    e.preventDefault();
    const data = this.props.getFormState();
    productService.create(data).then((el) => {
      console.log(el);
    });
  };
  getValue = (event) => {
      this.setState({name: event.target.value})
  }
  async getProducts() {
    const promise = await productService.getAll();
    const products = await promise.data;
    for (let product of products) {
        console.log(this.state.name);
      if (product.name === this.state.name) {
        console.log(product);
      }
    }
  }
  componentDidUpdate() {
    this.getProducts();
  }
  render() {
    return (
      <div className={styles.body}>
        <div className={styles.container}>
          <form className={styles.modal}>
            <header className={styles.header}>
              <h1>Payment of $145.00</h1>
              <div className={styles["card-type"]}>
                <a className={styles["card active"]} href="#">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Amex.png" />
                </a>
                <a className={styles.card} href="#">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Discover.png" />
                </a>
                <a className={styles.card} href="#">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Visa.png" />
                </a>
                <a className={styles.card} href="#">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/MC.png" />
                </a>
              </div>
            </header>
            <div className={styles.content}>
              <div className={styles.form}>
                <div className={styles["form-row"]}>
                  <div className={styles["input-group"]}>
                    <label htmlFor="">Name of product</label>
                    {/* <Input
                      type="text"
                      placeholder="name"
                      onChage={this.nameOnChangeHandler}
                    /> */}
                    <input value={this.state.name} onChange={this.getValue} />
                  </div>
                </div>
                <div className={styles["form-row"]}>
                  <div className={styles["input-group"]}>
                    <label htmlFor="">Card Number</label>
                    <Input
                      type="number"
                      placeholder="num"
                      onChage={this.nameOnChangeHandler}
                    />
                  </div>
                </div>
                <div className={styles["form-row"]}>
                  <div className={styles["input-group"]}>
                    <label htmlFor="">Expiry Date</label>
                    <Input
                      type="text"
                      placeholder="name"
                      onChage={this.nameOnChangeHandler}
                    />{" "}
                  </div>
                  <div className={styles["input-group"]}>
                    <label htmlFor="">Price</label>
                    <Input
                      type="text"
                      placeholder="name"
                      onChage={this.nameOnChangeHandler}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <footer className={styles.footer}>
              <button onClick={this.submitHandler} className={styles.button}>Complete Payment</button>
            </footer>
          </form>
        </div>
      </div>
    );
  }
}
export default withForm(AddToPage);
