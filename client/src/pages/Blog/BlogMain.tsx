import React from "react";
import Styles from "./BlogMain.module.css";
import BlogTrade from "../BlogTrade/BlogTrade";
import BlogTradePage from "../BlogTrade/BlogTrade";
import MenuCont from "../../components/СommonСomponents/MenuContext/MenuContext";
import LFooter from "../../components/СommonСomponents/Footer/LFooter";


const BlogMain = () => {
    const images: string[] = [require('components/PageComponents/LandingPageComp/StartTraiding/img/1.png'), require('components/PageComponents/LandingPageComp/StartTraiding/img/1-1.png'), require('components/PageComponents/LandingPageComp/StartTraiding/img/1-2.png'), require('components/PageComponents/LandingPageComp/StartTraiding/img/1-3.png')];


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
    return (
        <>
            <MenuCont />
            <BlogTradePage />
            <LFooter />
        </>
    )
}

export default BlogMain;