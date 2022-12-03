import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import Editor from "./components/map-editor"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <Editor />
  </React.StrictMode>
);
