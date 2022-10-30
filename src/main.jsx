import React from "react";
import ReactDOM from "react-dom/client";
import { TodoApp } from "./08-useReducer/TodoApp";

// import { CounterApp } from "./01-useState/CounterApp";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { HooksApp } from "./HooksApp";
// import { SimpleFormWithCustomHook } from "./02-useEffect/SimpleFormWithCustoHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { MemoHook } from "./06-memos/MemoHook";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <TodoApp />
    // </React.StrictMode>
);
