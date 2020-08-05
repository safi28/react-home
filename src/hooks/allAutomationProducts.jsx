import  { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import getAutomationProducts from '../utils/getAutomationProducs'

const AllAutomationProducts = () => {
    const [products, setProducts] = useState([])

    const getData = useCallback(async () => {
        const products = await getAutomationProducts()
        setProducts(products)
    }, [])
    useEffect(() => {
        getData()
    }, [getData])
    
    return { smartProducts: products }
}
export default AllAutomationProducts