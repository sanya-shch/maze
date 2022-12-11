import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import Store from "./store";

import App from "./App";
// import Editor from "./components/Editor"

ReactDOM.render(
  <Store>
    <BrowserRouter>
      <React.StrictMode>
        <App />
        {/*<Editor />*/}
      </React.StrictMode>
    </BrowserRouter>
  </Store>,
  document.getElementById("root")
);
