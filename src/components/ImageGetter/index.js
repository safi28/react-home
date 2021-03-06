import UserContext from "../../ContextWrapper/User"
import service from "../../services/user-service"
import { useState, useContext, useEffect } from "react"

const GetImage = () => {
  const [image, setImage] = useState("")
  const { user } = useContext(UserContext)

  const getData = async () => {
    const id = user.id
    const data = await service.userInfo(id)
    const { imageUrl } = data
    setImage(imageUrl)
  }
  useEffect(() => {
    getData()
  }, [getData])
  
  return { image }
}

export default GetImage
