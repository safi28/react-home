import React, { useContext } from "react"
import Form from "../../components/ProductForm/Form"
import Slide from "../../hooks/slideshow"
import Loader from "../../components/Loader/Loader"
import productService from "../../services/product-service"
import UserContext from "../../ContextWrapper/User"
import { useHistory } from "react-router-dom"
import Basket from "../Basket/BasketLogo"
const AutomationPage = () => {
  const history = useHistory()
  const context = useContext(UserContext)
  const { user } = context
  const { smartProducts, smartIncrease, smartDecrease } = Slide()

  const addDataToUser = async () => {
    if (smartProducts) {
      await productService.createSmart(smartProducts)
      const id = user.id
      history.push(`/api/user/basket/${id}`)
    } else {
      history.push("/api/products/smart")
    }
  }

  return smartProducts ? (
    <>
    <Basket />
    <Form
      previous={smartDecrease}
      nextSlideStyle={smartProducts}
      next={smartIncrease}
      onClick={addDataToUser}
    />
    </>
  ) : (
    <Loader />
  )
}

export default AutomationPage