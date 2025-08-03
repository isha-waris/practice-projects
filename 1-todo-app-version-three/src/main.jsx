//react is the component in which all components combine in vDom and then convert to actual dom
// react-dom aik pora tree structure hai jis mei hm mobile desktop koi bhi app bna skty hain jes react js,react native etc....
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
