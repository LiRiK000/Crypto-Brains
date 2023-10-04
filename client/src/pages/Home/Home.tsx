import React, { FC } from "react";
import Market from "components/LandingPageComp/MarketTrends/MarketTrends";
import ST from "components/LandingPageComp/StartTraiding/ST";
import NM from "components/LandingPageComp/NeverMiss/NM";
import WCB from "components/LandingPageComp/WhyChooseCryptoBrains/WCB";
import MenuCont from "components/СommonСomponents/MenuContext/MenuContext";
import styles from "./Home.module.css"

// import TS from "../../components/LandingPageComp/TraidersSaying/TS";

const images = [require('../../components/LandingPageComp/StartTraiding/img/1.png'), require('../../components/LandingPageComp/StartTraiding/img/1-1.png'), require('../../components/LandingPageComp/StartTraiding/img/1-2.png'), require('../../components/LandingPageComp/StartTraiding/img/1-3.png')];



const cardData = [
    { name: 'Create Account', key: "Sign Up Now", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', imageIndex: 0 },
    { name: 'Verify Bank Account', key: "Verify Now", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', imageIndex: 1 },
    { name: 'Add Fund in Wallet', key: "Add Now", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', imageIndex: 2 },
    { name: 'Start Trading', key: "Start Now", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', imageIndex: 3 }
];

const Home: FC = () => {
    
    
    return (
        <div className={styles.wrapper}>
            <MenuCont />

            {/* <TS /> */}
            <WCB />
            <Market />
            <ST image={images} cardData={cardData} />
            <NM />
        </div>

    )
}

export default Home;