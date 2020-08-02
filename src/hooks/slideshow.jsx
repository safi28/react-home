import React, { useContext } from 'react'
import { useState } from 'react'
import AllProducts from './allProducts'
import UserContext from '../ContextWrapper/User'
import AllAutomationProducts from './allAutomationProducts'

const Slide = () => {
    const { products } = AllProducts()
    const { smartProducts } = AllAutomationProducts()
    const [currentSlide, setCurrentSlide] = useState(0)
    const increase = () => {
        if (currentSlide === products.length - 1) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }
    const decrease = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        } else {
            setCurrentSlide(products.length - 1)
        }
    }
    return { products: products[currentSlide], smartProducts: smartProducts[currentSlide], currentSlide, increase, decrease }

}
export default Slide