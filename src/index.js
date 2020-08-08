import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { ToastProvider } from "react-toast-notifications";
import App from "./App/App"
import Navigation from "./navigation"

ReactDOM.render(
  <ToastProvider>
    <App>
      <Navigation />
    </App>
    </ToastProvider>,
  document.getElementById("root")
)