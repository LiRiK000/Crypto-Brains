import { FC } from 'react';
import MenuCont from "components/СommonСomponents/MenuContext/MenuContext";
import Sbp from "components/ProfileComp/SideBarProfileComp/SBP";
import { useAuth } from "hooks/use-auth";
import styles from './MyProfile.module.css'

const content: Array<string> = [
    'My Profile',
    'Security',
    'API Management',
    'Trading Fee',
    'Payment Option',
];

const MyProfile: FC = () => {
    const { isAuth, token, email, id } = useAuth();
    return (
        <div className={styles.wrapper}>
            <MenuCont />
            <Sbp title={'Profile'} TabsContent={content} TabCount={5} />
        </div>
    )
};

export default MyProfile;