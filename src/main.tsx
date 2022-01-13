import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import GlobalSyle from "./styles/GlobalSyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalSyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
