import  { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import service from '../services/product-service'

const AllAutomationProducts = () => {
    const [products, setProducts] = useState([])

    const getData = useCallback(async () => {
        const products = await service.getAutomationProducts()
        setProducts(products)
    }, [])
    
    useEffect(() => {
        getData()
    }, [getData])
    
    return { smartProducts: products }
}
export default AllAutomationProducts