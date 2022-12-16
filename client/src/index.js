import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App.js";
import './style.css';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
// createRoot(document.getElementById("root")).render(<App/>);