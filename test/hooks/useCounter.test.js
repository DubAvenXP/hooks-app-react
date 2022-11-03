import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks";

describe("Test in useCounter hook", () => {
    test("should retorn default value", () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test("should have counter 100", () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test("should increment counter", () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act(() => {
            increment();
            increment(2);
        });

        expect(result.current.counter).toBe(103);
    });

    test("should decrement counter by 1", () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(97);
    })

    test("should reset counter", () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment, reset, decrement } = result.current;

        act(() => {
            increment();
            increment(2);
            decrement(10);
            reset();
        });

        expect(result.current.counter).toBe(100);
    })
});
