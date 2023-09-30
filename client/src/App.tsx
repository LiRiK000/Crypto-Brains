import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/Team/Team'; // Замените на путь к вашему компоненту About
import NewPas from './pages/Log-Reg/NewPas';
import Home from "./pages/HomePage/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;