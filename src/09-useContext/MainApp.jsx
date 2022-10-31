import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage, LoginPage, AboutPage } from "./";
import { Navbar } from "./components/Navbar";

export const MainApp = () => {
    return (
        <>
            <Navbar/>

            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                <Route path="*" element={<Navigate to="/about" />} />

            </Routes>
        </>
    );
};
