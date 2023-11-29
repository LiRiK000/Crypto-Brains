import React from "react";
import ReferralMod from "../../../components/PageComponents/ReferralComp/Referral/ReferralMod";
import MenuCont from "../../../components/СommonСomponents/MenuContext/MenuContext";
import LFooter from "../../../components/СommonСomponents/Footer/LFooter";
import ReferralFriends from "../../../components/PageComponents/ReferralComp/ReferralFriends/ReferralFriends";
import LandingQuestion from "../../../components/PageComponents/LandingPageComp/LandingQuestion/LandingQuestion";
import HurryUp from "../../../components/PageComponents/ReferralComp/HurryUp/HurryUp";

const Referral = () => {
    return (
        <>
            <MenuCont></MenuCont>
            <ReferralFriends></ReferralFriends>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:'10%'}}>
                <span style={{color:"white", fontSize:"260%"}}>How Start Earning</span>
            </div>
            <ReferralMod></ReferralMod>
            <HurryUp></HurryUp>
            <LandingQuestion></LandingQuestion>
            <LFooter></LFooter>
        </>
    );
}

export default Referral;