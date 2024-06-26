import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import "destyle.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router basename="/knowledge-box-beta">
      <App />
    </Router>
  </React.StrictMode>,
);
