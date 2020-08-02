import React, { useState, useEffect } from 'react'
import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../ContextWrapper/User'

const GetUserProducts = () => {
    const history = useHistory()
    const context = useContext(UserContext)
    const [product, setProduct] = useState([])
    const [empty, setEmpty] = useState(false)

    const getData = useCallback(async () => {
        const { user } = context
        const response = await fetch(`http://localhost:9999/api/user/user/${user.id}`)
        const data = await response.json()
        if (!response.ok) {
            history.push('/error')
        } else {
            if (data.products.length < 1) {
                setEmpty(true)
            } else {
                setProduct(...product, data.products)
            }
        }
    }, [])
    useEffect(() => {
        getData()
    }, [getData])
    return { product: product, empty }
}
export default GetUserProducts