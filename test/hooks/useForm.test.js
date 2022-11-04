import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe("Test in useForm", () => {
    const initialForm = {
        name: "John",
        email: "jdoe@example.com",
    };

    test("should return default values", () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            handleInputChange: expect.any(Function),
            handleResetForm: expect.any(Function),
        });
    });

    test("should change value of name", () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { handleInputChange } = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: "name",
                    value: "Jane",
                },
            });
        });
        expect(result.current.name).toBe("Jane");
    });

    test("should reset form", () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { handleInputChange, handleResetForm } = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: "name",
                    value: "Jane",
                },
            });
            handleResetForm();
        });
        expect(result.current.name).toBe(initialForm.name);
    });
});
