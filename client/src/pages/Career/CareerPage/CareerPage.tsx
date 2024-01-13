import React from "react";
import style from "./CareerPage.module.css";
import MenuCont from "../../../components/СommonСomponents/MenuContext/MenuContext";
import LFooter from "../../../components/СommonСomponents/Footer/LFooter";
import LandingQuestion from "../../../components/PageComponents/LandingPageComp/LandingQuestion/LandingQuestion";
import JUT from "../../../components/PageComponents/Career/JUT/JUT";
import SYT from "../../../components/PageComponents/Career/SYT/SYT";
import OUR from "../../../components/PageComponents/Career/OJR/OUR";
import Hurry from "../../../components/PageComponents/Career/Hurry/Hurry";

const CareerPage = () => {
    return (
        <>
            <MenuCont></MenuCont>
            <JUT></JUT>
            <SYT></SYT>
            <OUR></OUR>
            <Hurry></Hurry>
            <LandingQuestion></LandingQuestion>
            <LFooter></LFooter>
        </>
    );
}

export default CareerPage;