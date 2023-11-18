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
import Cp from "./pages/CommunityPage/CP";
import Rp from "./pages/RiskPage/Rp";
import Ts from "./pages/TechnicalSupport/Ts";
import AboutUs from "./pages/AboutUs/AboutUs";
import BlogTrade from "./pages/BlogTrade/BlogTrade";
import RelatedBlog from "./pages/RelatedBlog/RelatedBlog";
import FAQ from "./pages/FAQ/FAQ";

function App() {
    return (
        <Router>
            <Routes>
                {/* Define routes for different pages and components. */}
                <Route path="/" element={<Home />} />
                {/* Route for the Home page. */}

                <Route path="/Team" element={<Team />} />
                {/* Route for the Team page. */}

                <Route path="/About" element={<AboutUs />} />
                {/* Route for the About page, which might display team information. */}

                <Route path="/login" element={<Login />} />
                {/* Route for the Login page. */}

                <Route path="/register" element={<Reg />} />
                {/* Route for the Registration page. */}

                <Route path="/profile" element={<MyProfilePage />} />
                {/* Route for the user's profile page. */}

                <Route path="/News" element={<NewsMain />} />
                {/* Route for the main News page. */}

                <Route path="/News-detail" element={<NewsDetails />} />
                {/* Route for displaying details of a specific news item. */}

                <Route path="/Road" element={<RoadMap />} />
                {/* Route for the RoadMap page. */}

                <Route path="/beginner" element={<BeginnersGuide />} />
                {/* Route for the Beginner's Guide page. */}

                <Route path="/token" element={<Token />} />
                {/* Route for displaying token-related information. */}

                <Route path="/Community" element={<Cp />} />
                {/* Route for the Community page. */}

                <Route path="/Risk" element={<Rp />} />
                {/* Route for the Risk page. */}

                <Route path="/ts" element={<Ts />} />
                {/* Route for the Technical Support page. */}

                <Route path="/blog" element={<BlogTrade />} />
                {/* Route for the Blog page */}

                <Route path="*" element={<Error />} />
                {/* Default route for handling any unknown or undefined routes (404 Error). */}

                <Route path="/relatedblog" element={<RelatedBlog />}/>
                {/* Route for the RelatedBlog page*/}

                <Route path="/FAQ" element={<FAQ />}/>
                {/* Route for the FAQ page*/}
            </Routes>
        </Router>
    );
}

export default App;
