import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/Team/Team';
import NewPas from './pages/Log-Reg/NewPas';
import Home from "./pages/Home/Home";
import Error from "./pages/E404/Error";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/career" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;