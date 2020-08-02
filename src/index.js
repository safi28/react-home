import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import * as serviceWorker from "./serviceWorker"
import App from "./App/App"
import Navigation from "./navigation"

ReactDOM.render(
    <App>
      <Navigation />
    </App>,
  document.getElementById("root")
)
serviceWorker.unregister()