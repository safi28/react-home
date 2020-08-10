import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { ToastProvider } from "react-toast-notifications";
import App from "./App/App"
import Navigation from "./navigation"

ReactDOM.render(
  <ToastProvider autoDismissTimeout={4000} autoDismiss={true}>
    <App>
      <Navigation />
    </App>
  </ToastProvider>,
  document.getElementById("root")
)