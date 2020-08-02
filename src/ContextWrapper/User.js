import React from 'react'

const UserContext = React.createContext({
    isLogged: false,
    user: null || '',
    logIn: () => {},
    logOut: () => {}
})
export default UserContext