// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles.css"; // Add your styles here

const AppLayout = () => {
    return (
        <App/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <App />);
