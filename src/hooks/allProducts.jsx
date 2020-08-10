import  { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import service from '../services/product-service'

const AllProducts = () => {
    const [products, setProducts] = useState([])

    const getData = useCallback(async () => {
        const products = await service.getProducts()
        setProducts(products)
    }, [])

    useEffect(() => {
        getData()
    }, [getData])
    
    return { products: products }
}
export default AllProducts