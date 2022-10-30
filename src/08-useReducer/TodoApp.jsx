import { TodoList, TodoAdd, TodoEmpty } from "./components";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
    const {
        todos,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        getPendingTodos,
    } = useTodo();

    return (
        <>
            <h1>
                TodoApp ({todos.length}),
                <small>Pendientes: ({getPendingTodos()})</small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {todos.length > 0 ? (
                        <TodoList
                            todos={todos}
                            onDeleteTodo={handleDeleteTodo}
                            onToggleTodo={handleToggleTodo}
                        />
                    ) : (
                        <TodoEmpty />
                    )}
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
};
