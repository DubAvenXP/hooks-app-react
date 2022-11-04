import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Test in <MultipleCustomHooks />", () => {


    const mockIncrement = jest.fn();
    const mockDecrement = jest.fn();
    const mockReset = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
        decrement: mockDecrement,
        reset: mockReset,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test("should show the default component", () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        
        expect(screen.getByText("Loading..."))
        expect(screen.getByText("BreakingBad Quotes"))

        const nextButton = screen.getByRole('button', { name: 'Next' });

        expect(nextButton.disabled).toBe(true);
    });

    test('should show a quote', () => {
        
        useFetch.mockReturnValue({
            data: [{ author: "Alejandro", quote: "Hola Mundo" }],
            hasError: null,
            isLoading: false,
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText("Hola Mundo")).toBeTruthy();
        expect(screen.getByText("Alejandro")).toBeTruthy();
    });

    test('should have next button as disabled', () => {
        useFetch.mockReturnValue({
            data: [{ author: "Alejandro", quote: "Hola Mundo" }],
            hasError: null,
            isLoading: false,
        });

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next' });
        expect(nextButton.disabled).toBeFalsy
    })

    test('should call to increment function', () => {
        
        useFetch.mockReturnValue({
            data: [{ author: "Alejandro", quote: "Hola Mundo" }],
            hasError: null,
            isLoading: false,
        });

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });



});
