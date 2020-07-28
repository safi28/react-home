import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import Navigation from "./Navigation";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Navigation />
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
