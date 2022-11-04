import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote, QuoteActions } from "./components";

export const MultipleCustomHooks = () => {
    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    );

    // if data has a value, then we can destructure it
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            <h4>Quote: #{counter}</h4>

            {
                isLoading 
                    ? <LoadingQuote /> 
                    : <Quote author={author} quote={quote} />
            }

            <QuoteActions
                isLoading={isLoading}
                increment={increment}
                decrement={decrement}
                reset={reset}
            />
        </>
    );
};
