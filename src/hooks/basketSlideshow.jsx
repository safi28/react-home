import { useState } from 'react'
import GetUserProducts from './getUserProduct'

const BasketSlide = () => {
    const { product, empty } = GetUserProducts()
    const [currentSlide, setCurrentSlide] = useState(0)

    const increase = () => {
        if (currentSlide === product.length - 1) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }
    return { product: product[currentSlide], empty, increase }
}
export default BasketSlide