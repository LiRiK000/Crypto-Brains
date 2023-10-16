import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Team from './pages/Team/Team';
import Home from "./pages/Home/Home";
import Error from "./pages/E404/Error";
import Login from "./pages/Log-Reg/Log";
import Reg from './pages/Log-Reg/Reg';
import MyProfilePage from "./pages/Profile/MyProfile";
import NewsMain from "./pages/News/NewsMain";
import NewsDetails from "./pages/News/NewsDetails";
import RoadMap from "./pages/RoadMap/RoadMap";
import BeginnersGuide from "./pages/BeginersGuide/BeginnersGuide";
import {Token} from "./pages/TokenPage/Token";


function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/Team" element={<Team />} />

                <Route path="/About" element={<Team />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Reg />} />

                <Route path="/profile" element={<MyProfilePage />} />

                <Route path="/News" element={<NewsMain />} />

                <Route path="/News-detail" element={<NewsDetails />} />

                <Route path="/Road" element={<RoadMap />} />

                <Route path="/beginner" element={<BeginnersGuide />} />

                <Route path="/token" element={<Token />} />

                <Route path="*" element={<Error />} />

            </Routes>
        </Router>
    );
}

export default App;