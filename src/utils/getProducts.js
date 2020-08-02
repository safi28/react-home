import axios from 'axios'

const getProducts = async () => {
  const response = await axios.get("http://localhost:9999/api/products/all");
  return response.data
};
export default getProducts
