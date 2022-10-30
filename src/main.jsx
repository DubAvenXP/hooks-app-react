import React from "react";
import ReactDOM from "react-dom/client";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";


// import { CounterApp } from "./01-useState/CounterApp";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { HooksApp } from "./HooksApp";
// import { SimpleFormWithCustomHook } from "./02-useEffect/SimpleFormWithCustoHook";


import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
        <MultipleCustomHooks />
    // </React.StrictMode>
);
