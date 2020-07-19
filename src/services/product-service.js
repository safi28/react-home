import axios from 'axios'

const productService = {
    getAll: () => {
        return axios.get('http://localhost:9999/api/products/')
    },
    create: (product) => {
        return fetch("http://localhost:9999/api/products/create", {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify(product)
          })
    }
}

export default productService