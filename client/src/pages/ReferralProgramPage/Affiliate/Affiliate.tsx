import React from "react";
import MenuCont from "../../../components/СommonСomponents/MenuContext/MenuContext";
import LandingQuestion from "../../../components/PageComponents/LandingPageComp/LandingQuestion/LandingQuestion";
import LFooter from "../../../components/СommonСomponents/Footer/LFooter";
import AffiliateProgram from "../../../components/PageComponents/ReferralComp/Affiliate/AffiliateProgram/AffiliateProgram";
import Trading from "../../../components/PageComponents/ReferralComp/Affiliate/Trading/Trading";
import Commission from "../../../components/PageComponents/ReferralComp/Affiliate/Commission/Commission";

const Affiliate = () => {
    return(
        <>
            <MenuCont></MenuCont>
            <AffiliateProgram></AffiliateProgram>
            <Trading></Trading>
            <Commission></Commission>
            <LandingQuestion></LandingQuestion>
            <LFooter></LFooter>
        </>
    )
}

export default Affiliate;