const initialState = [
    { id: 1, todo: "Recolectar la gema del Alma", done: false },
];

// reducer is a pure function
// reducer is a function that returns a new state

const todoReducer = (state = initialState, action) => {
    if (action?.type === "add") return [...state, action.payload];
    
    return state;
};


let todos = todoReducer();

const newTodo = { id: 2, todo: "Recolectar la gema del Poder", done: false };

todos = todoReducer(todos, {
    type: "add",
    payload: newTodo,
});

console.log(todos);

