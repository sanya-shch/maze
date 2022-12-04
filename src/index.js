import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import Store from "./store";

import App from "./App";
// import Editor from "./components/map-editor"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Store>
    <BrowserRouter>
      {/*<React.StrictMode>*/}
        <App />
        {/*<Editor />*/}
      {/*</React.StrictMode>*/}
    </BrowserRouter>
  </Store>
);
