import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/app";

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);
