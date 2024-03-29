import React from "react";
import TeamCards from 'components/PageComponents/TeamPageComp/Team/index';
import TMP from "components/PageComponents/TeamPageComp/TeamMainPage/TMP";
import MenuCont from "components/СommonСomponents/MenuContext/MenuContext";
import LFooter from "components/СommonСomponents/Footer/LFooter";





const ManagementDeportment : string[] = [require('components/PageComponents/TeamPageComp/Team/img/1.png'), require('components/PageComponents/TeamPageComp/Team/img/2.png'), require('components/PageComponents/TeamPageComp/Team/img/3.png'), require('components/PageComponents/TeamPageComp/Team/img/4.png')];
const HRDeportment : string[] = [require('components/PageComponents/TeamPageComp/Team/img/5.png'), require('components/PageComponents/TeamPageComp/Team/img/6.png'), require('components/PageComponents/TeamPageComp/Team/img/7.png'), require('components/PageComponents/TeamPageComp/Team/img/8.png')];
const MarketingDeportment : string[] = [require('components/PageComponents/TeamPageComp/Team/img/9.png'), require('components/PageComponents/TeamPageComp/Team/img/10.png'), require('components/PageComponents/TeamPageComp/Team/img/11.png'), require('components/PageComponents/TeamPageComp/Team/img/12.png')];
const FinanceDeportment : string[] = [require('components/PageComponents/TeamPageComp//Team/img/13.png'), require('components/PageComponents/TeamPageComp/Team/img/14.png'), require('components/PageComponents/TeamPageComp/Team/img/15.png'), require('components/PageComponents/TeamPageComp/Team/img/16.png')];





const cardData=[
    { name: 'John Doe', position: 'CEO', imageIndex: 0 },
    { name: 'John Doe', position: 'CEO', imageIndex: 1 },
    { name: 'John Doe', position: 'CEO', imageIndex: 2 },
    { name: 'John Doe', position: 'CEO', imageIndex: 3 }
]


const Team = () => {
    return (
        <>
            <MenuCont/>
            <TMP/>
            <TeamCards images={ManagementDeportment} cardData={cardData} sectionName='Managment Deportament'/>
            <TeamCards images={HRDeportment} cardData={cardData} sectionName='HR Deportament'/>
            <TeamCards images={MarketingDeportment} cardData={cardData} sectionName='Marketing Deportament'/>
            <TeamCards images={FinanceDeportment} cardData={cardData} sectionName='Finance Deportament'/>
            <LFooter/>
        </>
    );
}


export default Team;