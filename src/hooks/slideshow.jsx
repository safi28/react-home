import { useState } from 'react'
import AllProducts from './allProducts'
import AllAutomationProducts from './allAutomationProducts'
import Increase from '../components/Slideshow/Increase'
import Decrease from '../components/Slideshow/Decrease'

const Slide = () => {
    const { products } = AllProducts()
    const { smartProducts } = AllAutomationProducts()
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentSmartSlide, setCurrentSmartSlide] = useState(0)

    const increase = Increase({ currentSlide, products, setCurrentSlide, currentSmartSlide, smartProducts, setCurrentSmartSlide })
    const decrease = Decrease({ currentSlide, products, setCurrentSlide, currentSmartSlide, smartProducts, setCurrentSmartSlide })
    return { products: products[currentSlide], smartProducts: smartProducts[currentSmartSlide], currentSlide, increase, decrease }
}

export default Slide