import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {
    const { counter, increment, decrement, reset } = useCounter(1);

    const { data, hasError, isLoading } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    );

    

    // if data has a value, then we can destructure it
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />


            {isLoading && <div className="alert alert-info text-center">Loading...</div>}

            <h4>
                Quote: {counter}
            </h4>

            <blockquote className="blockquote text-end">
                <p className="mb-3">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <div className="d-flex justify-content-between">
                <div className="btn-group">
                    <button onClick={() => decrement()} disabled={isLoading} className="btn btn-primary">Back</button>
                    <button onClick={() => increment()} disabled={isLoading} className="btn btn-primary">Next</button>
                </div>
                <button onClick={() => reset()} disabled={isLoading} className="btn btn-primary">Reset</button>
            </div>
        </>
    );
};
