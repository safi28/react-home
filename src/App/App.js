import React, { useState, useEffect } from "react";
import "./App.css";
import UserContext from "../ContextWrapper/User";
import getCookie from "../utils/getCookie";

const App = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logIn = (user) => {
    setUser({
      ...user,
      isLogged: true,
    });
  };

  const logOut = () => {
    document.cookie = "auth_cookie= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    setUser({
      isLogged: false,
    });
  };
  useEffect(() => {
    const token = getCookie("auth_cookie");
    if (!token) {
      logOut();
      setLoading(false);
      return;
    }

    fetch("http://localhost:9999/api/user/verify", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((promise) => {
        return promise.json();
      })
      .then((response) => {
        if (response.status) {
          logIn({
            username: response.user.username,
            id: response.user._id,
          });
        } else {
          logOut();
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <UserContext.Provider
      value={{
        user,
        logIn,
        logOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default App;
