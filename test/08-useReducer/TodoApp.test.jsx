import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";

import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");


describe("Pruebas en <TodoApp />", () => {

    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: "Aprender React", done: false },
            { id: 2, description: "Aprender Mongo", done: true },
        ],
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn(),
        pendingTodosCount: 1,
        todosCount: 2,
    });

    test("should show correctly the component", () => {
        render(<TodoApp />);

        expect(screen.getByText("Aprender React")).toBeTruthy();
        expect(screen.getByText("Aprender Mongo")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();
    });
});
