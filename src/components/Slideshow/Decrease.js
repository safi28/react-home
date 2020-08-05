
const Decrease = ({ currentSlide, products, setCurrentSlide, currentSmartSlide, smartProducts, setCurrentSmartSlide }) => {
  const decrease = () => {
    if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
    } else {
        setCurrentSlide(products.length - 1)
    }
    if (currentSmartSlide > 0) {
        setCurrentSmartSlide(currentSmartSlide - 1)
    } else {
        setCurrentSmartSlide(smartProducts.length - 1)
    }
  };
  return decrease
};

export default Decrease
