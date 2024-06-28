import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.scss";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
