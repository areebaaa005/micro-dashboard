import React from "react";
import ReactDOM from "react-dom/client";
import SettingsApp from "./SettingsApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SettingsApp user={{ name: "Zara Khan", role: "Admin", avatar: "ZK" }} />
  </React.StrictMode>
);
