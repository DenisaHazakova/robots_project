import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App.js";
import reportWebVitals from "./reportWebVitals";
import "tachyons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals(console.log);
