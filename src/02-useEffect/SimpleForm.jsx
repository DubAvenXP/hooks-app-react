import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "dubavenxp",
        email: "alejandro@google.com",
    });

    const { username, email } = formState;

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    useEffect(() => {
        // console.log("hey");
    }, []);

    useEffect(() => {
        // console.log("formState changed");
    }, [formState]);

    useEffect(() => {
        // console.log("email changed");
    }, [email]);

    // [] -> solo se ejecuta una vez
    // [formState] -> se ejecuta cuando formState cambia

    return (
        <>
            <h1>Formulario simple</h1>
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
                className="form-control mt-2 mb-4"
                placeholder="alejandro@gmail.com"
                name="email"
                value={email}
                onChange={handleInputChange}
            />

            {username === "dubavenxp2" && <Message />}
            
        </>
    );
};
