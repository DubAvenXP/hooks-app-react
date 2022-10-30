import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
    const { handleInputChange, handleResetForm, description  } = useForm({ description: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) return;
        
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }

        onNewTodo(newTodo);

        handleResetForm();
    };

    return (
        <form>
            <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Aprender..."
                autoComplete="off"
                onChange={handleInputChange}
                value={description}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-2 btn-block"
                onClick={handleSubmit}
            >
                Agregar
            </button>
        </form>
    );
};
