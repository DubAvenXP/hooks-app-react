import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/components/TodoItem";

describe("Test in <TodoItem />", () => {
    const todo = {
        id: 1,
        desc: "Aprender React",
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        // clearAllMocks() clears all the mock calls from the mock functions
        jest.clearAllMocks();
    });

    test("should show a pending todo", () => {
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        const listElement = screen.getByRole("listitem");

        expect(listElement.classList.contains("list-group-item")).toBe(true);
        expect(listElement.classList.contains("d-flex")).toBe(true);
        expect(listElement.classList.contains("justify-content-between")).toBe(true);

        const spanElement = screen.getByLabelText("span");
        expect(spanElement.className).toContain("align-self-center");
        expect(spanElement.className).not.toContain("text-decoration-line-through");
    });

    test("should show a completed todo", () => {
        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        const spanElement = screen.getByLabelText("span");
        expect(spanElement.className).toContain("align-self-center");
        expect(spanElement.className).toContain("text-decoration-line-through");
    });

    test("span should call the onToggleTodo function", () => {
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        const spanElement = screen.getByLabelText("span");
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalled();
        expect(onToggleTodoMock).toHaveBeenCalledTimes(1);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test("button should call the onDeleteTodo function", () => {
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        const button = screen.getByRole("button", { name: "Borrar" });
        fireEvent.click(button);

        expect(onDeleteTodoMock).toHaveBeenCalled();
        expect(onDeleteTodoMock).toHaveBeenCalledTimes(1);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
});
