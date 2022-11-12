import { useContext } from "react";
import { UserContext } from "../03-examples/context/UserContext";

export const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);

    const handleLogin = () => {
        setUser({
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
            avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        });
    };

    return (
        <section>
            <h2>Loginpage</h2>
            <hr />
            <pre aria-label="pre" >{JSON.stringify(user, null, 3)}</pre>

            <button onClick={handleLogin} className="btn btn-primary">Establecer usuario</button>
        </section>
    );
};
