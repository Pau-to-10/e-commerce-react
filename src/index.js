import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./context/Context";
import { AuthProvider } from "./auth/context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <Context>
      <App />
    </Context>
  </AuthProvider>
);
