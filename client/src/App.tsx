import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/Team/Team';
import Home from "./pages/Home/Home";
import Error from "./pages/E404/Error";
import Login from "./pages/Log-Reg/Log";
import Reg from './pages/Log-Reg/Reg';
import MyProfilePage from "./pages/Profile/MyProfile";


function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/career" element={<About />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Reg />} />

                <Route path="/career" element={<About />} />

                <Route path="/career" element={<About />} />

                <Route path="/career" element={<About />} />

                <Route path="/profile" element={<MyProfilePage />} />


                <Route path="*" element={<Error />} />

            </Routes>
        </Router>
    );
}

export default App;