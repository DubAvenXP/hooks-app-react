import PropTypes from 'prop-types';

export const QuoteActions = ({
    isLoading,
    increment,
    decrement,
    reset,
}) => {
    return (
        <div className="d-flex justify-content-between">
            <div className="btn-group">
                <button
                    onClick={() => decrement()}
                    disabled={isLoading}
                    className="btn btn-primary"
                >
                    Back
                </button>
                <button
                    onClick={() => increment()}
                    disabled={isLoading}
                    className="btn btn-primary"
                >
                    Next
                </button>
            </div>
            <button
                onClick={() => reset()}
                disabled={isLoading}
                className="btn btn-primary"
            >
                Reset
            </button>
        </div>
    );
};


QuoteActions.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
};