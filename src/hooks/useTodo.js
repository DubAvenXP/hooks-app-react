import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {
    const initialState = [];



    const initializeTodos = () => {
        return JSON.parse(localStorage.getItem("todos")) || [];
    };

    const [todos, dispatch] = useReducer(
        todoReducer,
        initialState,
        initializeTodos
    );

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (newTodo) => {
        const action = {
            type: "add",
            payload: newTodo,
        };

        dispatch(action);
    };

    const handleDeleteTodo = (todoId) => {
        const action = {
            type: "delete",
            payload: todoId,
        };
        dispatch(action);
    };

    const handleToggleTodo = (todoId) => {
        const action = {
            type: "toggle",
            payload: todoId,
        };
        dispatch(action);
    };

    const pendingTodosCount = () => todos.reduce((acc, todo) => (todo.done ? acc : acc + 1), 0);
    const todosCount = () => todos.length; 
        

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        pendingTodosCount,
        todosCount,
    };
};
