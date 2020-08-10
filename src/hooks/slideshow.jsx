import { useState } from 'react'
import AllProducts from './allProducts'
import AllAutomationProducts from './allAutomationProducts'
import Increase from '../utils/Slideshow/Increase'
import Decrease from '../utils/Slideshow/Decrease'
import GetUserProducts from './getUserProduct'

const Slide = () => {
    const { products } = AllProducts()
    const { smartProducts } = AllAutomationProducts()
    const { product, empty } = GetUserProducts()
    const [currentBasketSlide, setCurrentBasketSlide] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentSmartSlide, setCurrentSmartSlide] = useState(0)

    const increase = Increase({ currentSlide, products, setCurrentSlide })
    const smartIncrease = Increase({ currentSlide: currentSmartSlide, products: smartProducts, setCurrentSlide: setCurrentSmartSlide })
    const basketIncrease = Increase({ currentSlide: currentBasketSlide, products: product, setCurrentSlide: setCurrentBasketSlide })
    
    const smartDecrease = Decrease({ currentSlide: currentSmartSlide, products: smartProducts, setCurrentSlide: setCurrentSmartSlide })
    const interiorDecrease = Decrease({ currentSlide, products, setCurrentSlide })
    
    return { products: products[currentSlide], smartProducts: smartProducts[currentSmartSlide], currentSlide, 
    increase, smartDecrease, interiorDecrease, smartIncrease, basketProducts: product[currentBasketSlide], basketIncrease, empty }
}

export default Slide