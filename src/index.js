import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";


let htmlElement = document.getElementById("root")
let root = ReactDOM.createRoot(htmlElement)
root.render(<App></App>)