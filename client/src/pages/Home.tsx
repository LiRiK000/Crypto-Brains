import React, { FC } from "react";
import Menu from "../components/Menu/Menu";
import Market from "../components/MarketTrends/MarketTrends";
import Team from "../components/Team/index";
import './Home.css'




const Home: FC = () => {
    return (
        <>
            <Menu />
            <Market />
            <Team />
        </>
    ) 
}

export default Home;