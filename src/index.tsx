import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import "./scss/reset.scss";
import { App } from "./components/app";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
