import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/03-examples/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Test in <LoginPage /> ", () => {

    setUserMock = jest.fn();

    test("should show the component without user", () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe("null");
    });
    
    test("should show the component with user", () => {
        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe("null");
        
        const button = screen.getByText("Establecer usuario");
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalled();
        expect(setUserMock).toHaveBeenCalledWith({
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
            avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        });
    });
});
