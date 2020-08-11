import React from "react"
import { useToasts } from "react-toast-notifications"
import BasketLabel from "./label"
import { useHistory } from "react-router-dom"
import Loader from "../../components/Loader/Loader"
import EmptyCartPage from "./emptyCart"
import Slide from "../../hooks/slideshow"
import productService from "../../services/product-service"

const BasketPage = () => {
  const { addToast } = useToasts()
  const history = useHistory()
  const {basketProducts, basketIncrease, empty} = Slide()

  if(empty && !basketProducts) {
    return <EmptyCartPage />
  }
  const deleteClick = async () => {
    const response = await productService.delete(basketProducts)
    const data = await response.json()
    addToast(data, {appearance: 'success'})
    history.push(`/`)
  }
  return basketProducts && !empty ? (
    <BasketLabel
      next={basketIncrease}
      name={basketProducts.name}
      imageUrl={basketProducts.imageUrl}
      price={basketProducts.price}
      empty={empty}
      onClick={() => history.push("/api/products/buy", { state: basketProducts })}
      deleteOnClick={deleteClick}
    />
  ) : (
    <Loader />
  )
}
export default BasketPage