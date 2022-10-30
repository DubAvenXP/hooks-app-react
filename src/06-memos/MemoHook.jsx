import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationsNumber = 100) => {
    for (let i = 0; i < iterationsNumber; i++) {
        console.log("Here we go...");
    }
    return `${iterationsNumber} iterations done.`;
}

// useEffect es para disparar efectos secundarios... por ejemplo, una variable cambia... quieres cancelar una subscripción, quieres crear un listener... eso lo puedes hacer con un useEffect

// Un useMemo, es para memorizar un valor, digamos que tienes un proceso pesado que tomo tiempo calcular, entonces lo memorizas, y únicamente lo volverás a calcular si los parámetros o argumentos cambian

export const MemoHook = () => {
    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true)

    // memoize the result of the heavyStuff function
    // only if the counter changes
    const memorizedValue = useMemo(
        () => heavyStuff(counter),
        [counter]
    );

    return (
        <>
            <h1>
                Counter: <small><b>{counter}</b></small> (MemoHook)
            </h1>
            <hr />

            <h4> { memorizedValue } </h4>

            <button className="btn btn-primary" onClick={() => increment()}>
                +1
            </button>

            <button
                className="btn btn-outline-primary ms-3"
                onClick={() => setShow(!show)}
            >
                Show/Hide: {JSON.stringify(show)}
            </button>
        </>
    );
};
