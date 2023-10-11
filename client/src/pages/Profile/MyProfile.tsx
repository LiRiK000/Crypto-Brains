import React, { FC } from 'react';
import MenuCont from "components/СommonСomponents/MenuContext/MenuContext";
import Sbp from "components/СommonСomponents/SideBar/SBP";
import { useAuth } from "hooks/use-auth";
import styles from './MyProfile.module.css'
import MyProfile from "../../components/PageComponents/ProfileComp/1.MyProfile/MyProfile";
import Home from "../Home/Home";
import MenuUnLog from "../../components/СommonСomponents/MenuUnLog/Menu";
import Po from "../../components/PageComponents/ProfileComp/5.PaymentOption/PO"; //Payment Option

const content: Array<string> = [
    'My Profile',
    'Security',
    'API Management',
    'Trading Fee',
    'Payment Option',
];
const tabs = [
    {
        content: <MyProfile />,
    },
    {
        content: <Home />,
    },
    {
        content: <MenuCont />,
    },
    {
        content: <MenuUnLog />,
    },
    {
        content: <Po />,
    },
];



const MyProfilePage: FC = () => {
    const { isAuth, token, email, id } = useAuth();
    return (
        <div className={styles.wrapper}>
            <MenuCont />
            <Sbp title={'Profile'} TabsContent={content} TabCount={5} tabs={tabs} />
        </div>
    )
};

export default MyProfilePage;