import  { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import getProducts from '../utils/getProducts'

const AllProducts = () => {
    const [products, setProducts] = useState([])

    const getData = useCallback(async () => {
        const products = await getProducts()
        setProducts(products)
    }, [])
    useEffect(() => {
        getData()
    }, [getData])
    return { products: products }
}
export default AllProducts