
const Increase = ({ currentSlide, products, setCurrentSlide }) => {
  const increase = () => {
    if (currentSlide === products.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  };
  return increase
}

export default Increase
