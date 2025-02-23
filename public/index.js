import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "../styles.css"; 

// Strict Mode helps catch errors in development
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Error Handling (Optional)
window.onerror = function (message, source, lineno, colno, error) {
  console.error("An error occurred:", message);
};
