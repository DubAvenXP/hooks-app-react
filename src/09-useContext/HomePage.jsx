import { useContext } from "react";
import { UserContext } from "../03-examples/context/UserContext";

export const HomePage = () => {
    const { user } = useContext(UserContext);
    return (
        <section>
            <h2>Homepage <small>{user?.name}</small></h2>
            <hr />
            <p>
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </section>
    );
};
