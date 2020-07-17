import React from "react"
import Main from "./Main/Main"

function render(Cmp, { isLogged, ...otherProps}) {
  return function (props) {
    return (
      <Main>
        <Cmp {...props}  {...otherProps} />
      </Main>
    )
  }
}

export default render