import React, {FC} from "react"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import MenuCont from "components/СommonСomponents/MenuContext/MenuContext"
import LandingMainPage from "components/PageComponents/LandingPageComp/LandingMainPage/LandingMainPage"
import LandingQuestion from "components/PageComponents/LandingPageComp/LandingQuestion/LandingQuestion"
import LFooter from "components/СommonСomponents/Footer/LFooter"
// import TS from "components/LandingPageComp/TradersSaying/TS"
import styles from "./Home.module.css"
import BlogTrade from "../BlogTrade/BlogTrade";
import BlogTradePage from "../BlogTrade/BlogTrade";

const images = [require('components/PageComponents/LandingPageComp/StartTraiding/img/1.png'), require('components/PageComponents/LandingPageComp/StartTraiding/img/1-1.png'), require('components/PageComponents/LandingPageComp/StartTraiding/img/1-2.png'), require('components/PageComponents/LandingPageComp/StartTraiding/img/1-3.png')];


const cardData = [
    {
        name: 'Create Account',
        key: "Sign Up Now",
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageIndex: 0
    },
    {
        name: 'Verify Bank Account',
        key: "Verify Now",
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageIndex: 1
    },
    {
        name: 'Add Fund in Wallet',
        key: "Add Now",
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageIndex: 2
    },
    {
        name: 'Start Trading',
        key: "Start Now",
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageIndex: 3
    }
];

const Home : FC = () => {

    return (
        <div className={styles.wrapper}>
            <MenuCont/>
            <LandingMainPage></LandingMainPage>
            <LandingQuestion></LandingQuestion>
            <BlogTrade></BlogTrade>
            <LFooter/>
        </div>

    )
}

export default Home;