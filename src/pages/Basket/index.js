import React from "react"
import BasketLabel from "./label"
import { useHistory } from "react-router-dom"
import Loader from "../../components/Loader/Loader"
import EmptyCartPage from "./emptyCart"
import BasketSlide from "../../hooks/basketSlideshow"

const BasketPage = () => {
  const history = useHistory()
  const { product, increase, empty } = BasketSlide()
  if(empty && !product) {
    return <EmptyCartPage />
  }
  return product && !empty ? (
    
    <BasketLabel
      next={increase}
      name={product.name}
      imageUrl={product.imageUrl}
      price={product.price}
      empty={empty}
      onClick={() => history.push("/api/products/buy", { state: product })}
    />
  ) : (
    <Loader />
  )
}
export default BasketPage