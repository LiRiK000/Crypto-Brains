import React, { FC } from "react";
import Menu from "../../components/СommonСomponents/Menu/Menu";
import Market from "../../components/LandingPageComp/MarketTrends/MarketTrends";
import ST from "../../components/LandingPageComp/StartTraiding/ST";
import NM from "../../components/LandingPageComp/NeverMiss/NM";



const images = [require('../../components/StartTraiding/img/1.png'), require('../../components/StartTraiding/img/1-1.png'), require('../../components/StartTraiding/img/1-2.png'), require('../../components/StartTraiding/img/1-3.png')];

const btns = [
    {key: "Sign Up Now"},
    {key: "Verify Now"},
    {key: "Add Now"},
    {key: "Start Now"}
];



const cardData = [
    { name: 'Create Account',key:"Sign Up Now", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', imageIndex: 0 },
    { name: 'Verify Bank Account',key:"Verify Now", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', imageIndex: 1 },
    { name: 'Add Fund in Wallet',key:"Add Now", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', imageIndex: 2 },
    { name: 'Start Trading',key:"Start Now", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', imageIndex: 3 }
];

const Home: FC = () => {
    return (
        <>
            <Menu />
            <Market />
            <ST image={images} cardData={cardData}/>
            <NM />
        </>
    ) 
}

export default Home;