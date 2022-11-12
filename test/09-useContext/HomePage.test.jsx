import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/03-examples/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe("Test in <HomePage /> ", () => {

    const user = {
        id: 1,
        name: "Alejandro",
        email: "alejandro@google.com",
        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    }

    test("should show the component without user", () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe("null");
    });

    test("should show the component with user", () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
    });
});
