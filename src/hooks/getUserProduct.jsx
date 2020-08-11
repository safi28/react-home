import { useState, useEffect, useContext, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../ContextWrapper/User'

const GetUserProducts = () => {
    const history = useHistory()
    const context = useContext(UserContext)
    const { user } = context
    const [product, setProduct] = useState([])
    const [empty, setEmpty] = useState(false)

    const getData = useCallback(async () => {
        const response = await fetch(`http://localhost:9999/api/user/products/${user.id}`)
        const data = await response.json()
        if (!response.ok) {
            history.push('/error')
        } else {
            if (data.products.length < 1 && data.smartProducts.length < 1) {
                setEmpty(true)
            } else {
                setProduct([...data.products, ...data.smartProducts])
            }
        }
    }, [])

    useEffect(() => {
        getData()
    }, [getData])

    const sorted = product.sort((a, b) => {
       return new Date(b.createdAt) - new Date(a.createdAt)
    })
    
    return { product: sorted, empty }
}

export default GetUserProducts