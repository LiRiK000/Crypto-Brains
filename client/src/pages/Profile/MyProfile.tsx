import React, { FC } from 'react';
import MenuCont from "components/СommonСomponents/MenuContext/MenuContext";
import Sbp from "components/СommonСomponents/SideBar/SBP";
import { useAuth } from "hooks/use-auth";
import MyProfile from "components/PageComponents/ProfileComp/1.MyProfile/MyProfile";
import Home from "../Home/Home";
import Po from "components/PageComponents/ProfileComp/4.PaymentOption/PO";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import Tf from "components/PageComponents/ProfileComp/3.TradingFee/TF"; //Payment Option
import styles from './MyProfile.module.css'
import LFooter from "../../components/СommonСomponents/Footer/LFooter";
import AM from "../../components/PageComponents/ProfileComp/2.APIManagement/AM";

const content: Array<string> = [
    'My Profile',
    'API Management',
    'Trading Fee',
    'Payment Option',
];
const tabs: {content: ReactJSXElement} [] = [
    {
        content: <MyProfile />,
    },
    {
        content: <AM />,
    },
    {
        content: <Tf />,
    },
    {
        content: <Po />,
    },
];



const MyProfilePage: FC = () => {
    return (
        <div className={styles.wrapper}>
            <MenuCont />
            <Sbp title={'Profile'} TabsContent={content} TabCount={4} tabs={tabs} />
            <LFooter />
        </div>
    )
};

export default MyProfilePage;