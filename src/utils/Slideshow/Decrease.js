
const Decrease = ({ currentSlide, products, setCurrentSlide }) => {
  const decrease = () => {
    if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
    } else {
        setCurrentSlide(products.length - 1)
    }
  }
  return decrease
}

export default Decrease
