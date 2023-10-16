import React from 'react';
import MenuCont from "components/СommonСomponents/MenuContext/MenuContext";
import Rm from "components/PageComponents/RoadMapComp/RoadMap/RM";
import LFooter from "../../components/СommonСomponents/Footer/LFooter";

const RoadMap = () => {
    return (
        <>
            <MenuCont/>
            <Rm/>
            <LFooter />
        </>
    );
};

export default RoadMap;