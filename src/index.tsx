import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/main.scss";
import { ReduxProvider } from "./hocs/redux-provider";
import { App } from "./components/app";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <ReduxProvider>
            <App />
        </ReduxProvider>
    </React.StrictMode>
);

reportWebVitals();
