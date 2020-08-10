import React from "react"
import BasketLabel from "./label"
import { useHistory } from "react-router-dom"
import Loader from "../../components/Loader/Loader"
import EmptyCartPage from "./emptyCart"
import Slide from "../../hooks/slideshow"

const BasketPage = () => {
  const history = useHistory()
  const {basketProducts, basketIncrease, empty} = Slide()
  if(empty && !basketProducts) {
    return <EmptyCartPage />
  }
  return basketProducts && !empty ? (
    
    <BasketLabel
      next={basketIncrease}
      name={basketProducts.name}
      imageUrl={basketProducts.imageUrl}
      price={basketProducts.price}
      empty={empty}
      onClick={() => history.push("/api/products/buy", { state: basketProducts })}
    />
  ) : (
    <Loader />
  )
}
export default BasketPage