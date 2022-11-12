import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";


describe('Test in <MainApp/>', () => {
    
    test('should show homepage', () => {
        render(
            // MemoryRouter is a component that allows us to simulate the routes
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        )

        expect( screen.getByText('Homepage') ).toBeTruthy();
    });
    
    test('should show loginpage', () => {
        render(
            // MemoryRouter is a component that allows us to simulate the routes
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )

        expect( screen.getByText('Loginpage') ).toBeTruthy();
    });

    

});