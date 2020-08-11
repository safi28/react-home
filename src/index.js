import React from "react"
import ReactDOM from "react-dom"
import { ToastProvider } from "react-toast-notifications";
import App from "./App/App"
import Navigation from "./navigation"
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.render(
  <ErrorBoundary>
    <ToastProvider autoDismissTimeout={4000} autoDismiss={true}>
     <App>
       <Navigation />
     </App>
    </ToastProvider>
  </ErrorBoundary>,
  document.getElementById("root")
)