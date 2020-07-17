import React from 'react'
import { StoreContext } from '../Store/Store'
import { loginSuccess } from '../Store/actions'
import userService from '../services/user-service'
const Auth = ({ children }) => {
    const { dispatch } = React.useContext(StoreContext)
    React.useEffect(() => {
      userService.home()
        .then((res) => {
          console.log("response ", res)
          res.status === 200
            ? res.json()
            : res.text().then((text) => Promise.reject(text))
        })
        .then((user) => {
          console.log(user, ' user')
          dispatch(loginSuccess(user))
        })
        .catch(() => {
          dispatch(loginSuccess(null))
        })
    }, [])
    return <>{children}</>
  }

export default Auth