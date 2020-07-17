import React, { useState, useEffect } from "react"
import Form from './Form'
const Slideshow = ({ images = [], title = [], price=[], percent=[], interval = 3000 }) => {
  const [thumbnails, setThumnails] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nextSlideStyle, setNextSlideStyle] = useState({})
  const [currentSlideStyle, setCurrentSlideStyle] = useState({})

  useEffect(() => {
    setThumnails(images)
    setCurrentSlideStyle({
      backgroundImage:  images[currentSlide],
    })

    if (currentSlide === images.length - 1) {
      setNextSlideStyle({
        backgroundImage: images[0],
        frontTitle: title[0],
        price: price[0],
        percent: percent[0]
      })
    } else {
      setNextSlideStyle({
        backgroundImage: images[currentSlide + 1],
        frontTitle: title[currentSlide + 1],
        price: price[currentSlide + 1],
        percent: percent[currentSlide + 1]
      })
    }
    const loop = setInterval(() => {
      if (currentSlide === images.length - 1) {
        setCurrentSlide(0)
      } else {
        setCurrentSlide(currentSlide + 1)
      }
    }, interval)
    return () => clearInterval(loop)
  }, [images, currentSlide, interval])
  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    } else {
      setCurrentSlide(thumbnails.length - 1)
    }
  }
  function next() {
    if (currentSlide === thumbnails.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }
  return (
      <Form previous={previous} nextSlideStyle={nextSlideStyle} next={next} />
  )
}
export default Slideshow