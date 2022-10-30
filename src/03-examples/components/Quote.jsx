import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ author, quote }) => {
    const blockQuoteRef = useRef();
    const [boxSize, setBoxSize] = useState({
        height: 0,
        width: 0,
    })

    useLayoutEffect(() => {
        const {
            height,
            width,
        } = blockQuoteRef.current.getBoundingClientRect()

        setBoxSize({
            height,
            width,
        })

    }, []);

    return (
        <>
            <blockquote
                ref={blockQuoteRef}
                className="blockquote text-end"
                style={{ display: "flex " }}
            >
                <p className="mb-3">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
            <code>
                {JSON.stringify(boxSize, null, 3)}
            </code>
        </>
    );
};

Quote.propTypes = {
    author: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
};
