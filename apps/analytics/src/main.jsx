import React from "react";
import ReactDOM from "react-dom/client";
import AnalyticsApp from "./AnalyticsApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnalyticsApp user={{ name: "Zara Khan", role: "Admin" }} />
  </React.StrictMode>
);
