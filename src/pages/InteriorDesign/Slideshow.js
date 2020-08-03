import React, { useContext } from "react"
import Form from "../../components/ProductForm/Form"
import productService from "../../services/product-service"
import Slide from "../../hooks/slideshow"
import { useHistory } from "react-router-dom"
import UserContext from "../../ContextWrapper/User"
import Loader from "../../components/Loader/Loader"

const Slideshow = () => {
  const context = useContext(UserContext)
  const { user } = context
  const { products, increase, decrease } = Slide()
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
      previous={decrease}
      nextSlideStyle={products}
      next={increase}
      onClick={addDataToUser}
    />
  ) : (
    <Loader />
  )
}

export default Slideshow