import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {

    const { handleInputChange, handleResetForm, username, email, password } = useForm({
            username: "",
            email: "",
            password: "",
        });

    return (
        <>
            <h1>Form with custom hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={username}
                onChange={handleInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="alejandro@gmail.com"
                name="email"
                value={email}
                onChange={handleInputChange}
            />
            <input
                type="password"
                className="form-control mt-2 mb-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={handleInputChange}
            />

            <button onClick={handleResetForm} className="btn btn-primary">
                Reset
            </button>
        </>
    );
};
