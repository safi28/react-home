import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import Form from "../../components/ProductForm/Form"
import productService from "../../services/product-service"
import Slide from "../../hooks/slideshow"
import UserContext from "../../ContextWrapper/User"
import Loader from "../../components/Loader/Loader"

const Slideshow = () => {
  const context = useContext(UserContext)
  const { user } = context
  const { products, increase, interiorDecrease } = Slide()
  const history = useHistory()

  const addDataToUser = async () => {
    if (products !== undefined) {
      await productService.create(products)
      const id = user.id
      history.push(`/api/user/basket/${id}`)
    } else {
      history.push("/")
    }
  }

  return products ? (
    <Form
      previous={interiorDecrease}
      nextSlideStyle={products}
      next={increase}
      onClick={addDataToUser}
    />
  ) : (
    <Loader />
  )
}

export default Slideshow