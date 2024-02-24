import React from "react";
import ReactDOM from "react-dom/client";
import { CalculatorApp } from "./app.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <CalculatorApp />
  </React.StrictMode>
);
