import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./05-useLayoutEffect/Layout";


// import { CounterApp } from "./01-useState/CounterApp";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { HooksApp } from "./HooksApp";
// import { SimpleFormWithCustomHook } from "./02-useEffect/SimpleFormWithCustoHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";


import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
        <Layout />
    // </React.StrictMode>
);
