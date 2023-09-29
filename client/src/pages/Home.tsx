import React, { FC } from "react";
import Menu from "../components/Menu/Menu";
import Market from "../components/MarketTrends/MarketTrends";
<<<<<<< refs/remotes/LiRiK/main
import Team from "../components/Team/module";
=======
import Team from "../components/Team/index";
>>>>>>> Make a css module
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