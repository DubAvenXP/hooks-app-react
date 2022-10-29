import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(5);

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button onClick={() => decrement(0.5)} className="btn btn-primary ms-2">
                -1
            </button>
            <button onClick={reset} className="btn btn-primary ms-2">
                Reset
            </button>
            <button onClick={() => increment(5)} className="btn btn-primary ms-2">
                +1
            </button>
        </>
    );
};
