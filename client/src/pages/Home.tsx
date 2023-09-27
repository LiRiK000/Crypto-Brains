import React, { FC } from "react";
import Menu from "../components/Menu/Menu";
import Market from "../components/MarketTrends/MarketTrends";
import './Home.css'

const Home: FC = () => {
    return (
        <>
            <Menu />
            <Market />
        </>
    ) 
}

export default Home;