import React from "react";

const Increase = ({ currentSlide, products, setCurrentSlide, currentSmartSlide, smartProducts, setCurrentSmartSlide }) => {
  const increase = () => {
    if (currentSlide === products.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
    if (currentSmartSlide === smartProducts.length - 1) {
      setCurrentSmartSlide(0);
      } else {
        setCurrentSmartSlide(currentSmartSlide + 1);
      }
  };
  return increase
};

export default Increase
