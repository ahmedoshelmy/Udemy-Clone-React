import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import data from "./Data/FetchCourses";
import FetchCourses from "./Data/FetchCourses";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FetchCourses />
      <App data={data} />
    </BrowserRouter>
  </React.StrictMode>
);
