import React from "react";
import Form from "../InteriorDesign/Form";
import Slide from "../../hooks/slideshow";
import Loader from '../../components/Loader/Loader'
const AutomationPage = () => {
    const { smartProducts, currentSlide, increase, decrease } = Slide()
  return smartProducts ? (
    <Form
      previous={decrease}
      nextSlideStyle={smartProducts}
      next={increase}
    //   onClick={addDataToUser}
    />
  ) : (
    <Loader />
  )
};
export default AutomationPage;
