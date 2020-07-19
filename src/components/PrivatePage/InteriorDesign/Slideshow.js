import React, { useState, useEffect } from "react"
import Form from "./Form"
import { Redirect } from "react-router-dom"

const Slideshow = ({
  images = [],
  name = [],
  price = [],
  percent = [],
}) => {
  const [thumbnails, setThumnails] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nextSlideStyle, setNextSlideStyle] = useState({})
  const [currentSlideStyle, setCurrentSlideStyle] = useState({})
  const [data, setData] = useState({})
  useEffect(() => {
    setThumnails([images, name, price, percent])
    setCurrentSlideStyle({
      imageUrl: images[currentSlide],
      name: name[currentSlide],
      price: price[currentSlide],
      percent: percent[currentSlide],
    })
    if (currentSlide === images.length - 1) {
      setNextSlideStyle({
        imageUrl: images[0],
        name: name[0],
        price: price[0],
        percent: percent[0],
      })
      setData(name[0])
    } else {
      setNextSlideStyle({
        imageUrl: images[currentSlide + 1],
        name: name[currentSlide + 1],
        price: price[currentSlide + 1],
        percent: percent[currentSlide + 1],
      })
      setData({
        name: name[currentSlide + 1],
        price: price[currentSlide + 1],
        durability: percent[currentSlide + 1],
        imageUrl: images[currentSlide + 1],
      })
    }
  
  }, [images, currentSlide])
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
    <Form
      previous={previous}
      nextSlideStyle={nextSlideStyle}
      next={next}
    />
  )
}
export default Slideshow