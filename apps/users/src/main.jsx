import React from "react";
import ReactDOM from "react-dom/client";
import UsersApp from "./UsersApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersApp user={{ name: "Zara Khan", role: "Admin" }} />
  </React.StrictMode>
);
