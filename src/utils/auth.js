const authenticate = async (url, body, onSuccess, onFailure) => {
    try {
      const promise = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const authToken = promise.headers.get('Authorization')
      document.cookie = `auth_cookie=${authToken}`
  
      const response = await promise.json()
  
      if (response.username && authToken) {
        onSuccess({
          username: response.username,
          id: response._id
        })
      } else {
        onFailure({
          message: response
        })
      }
    } catch(e) {
      onFailure({
        message: 'User does not exist'
      })
    }
  }
  
  export default authenticate