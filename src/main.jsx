import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n"; // import the i18n config
import './index.css'; // or your CSS file path

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
