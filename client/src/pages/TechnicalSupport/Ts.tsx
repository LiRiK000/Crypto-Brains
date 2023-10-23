import React from 'react';
import MenuCont from "components/СommonСomponents/MenuContext/MenuContext";
import LFooter from "components/СommonСomponents/Footer/LFooter";
import TsComp from "components/PageComponents/TechnicalSupportComp/TsComp";

const Ts = () => {
    return(
        <>
            <MenuCont />
            <TsComp />
            <LFooter />
        </>
    )
}
export default Ts;