import { useState, useCallback, useEffect } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback((value) => {
        setCounter((c) => c + value);
    }, []);

    // When react renders this component, it will create a new function
    // and pass it to the ShowIncrement component that means that
    // increment has other memory address
    // const increment = () => {
    //     setCounter(counter + 1);
    // };

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    );
};
