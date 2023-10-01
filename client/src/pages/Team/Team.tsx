import React from "react";
import TeamCards from '../../components/TeamPageComp/Team/index';
import Menu from "../../components/СommonСomponents/Menu/Menu";
import TMP from "../../components/TeamPageComp/TeamMainPage/TMP";

const ManagmentDeportment = [require('../../components/Team/img/1.png'), require('../../components/Team/img/2.png'), require('../../components/Team/img/3.png'), require('../../components/Team/img/4.png')];
const HRDeportment = [require('../../components/Team/img/5.png'), require('../../components/Team/img/6.png'), require('../../components/Team/img/7.png'), require('../../components/Team/img/8.png')];
const MarketingDeportment = [require('../../components/Team/img/9.png'), require('../../components/Team/img/10.png'), require('../../components/Team/img/11.png'), require('../../components/Team/img/12.png')];
const FinanceDeportment = [require('../../components/Team/img/13.png'), require('../../components/Team/img/14.png'), require('../../components/Team/img/15.png'), require('../../components/Team/img/16.png')];





const cardData = [
    { name: 'John Doe', position: 'CEO', imageIndex: 0 },
    { name: 'John Doe', position: 'CEO', imageIndex: 1 },
    { name: 'John Doe', position: 'CEO', imageIndex: 2 },
    { name: 'John Doe', position: 'CEO', imageIndex: 3 }
]


const Team = () => {




    return (
            <div style={{background: '#1E1F25'}}>
                <Menu />
                <TMP />
                <TeamCards images={ManagmentDeportment} cardData={cardData} sectionName='Managment Deportament' />
                <TeamCards images={HRDeportment} cardData={cardData} sectionName='HR Deportament' />
                <TeamCards images={MarketingDeportment} cardData={cardData} sectionName='Marketing Deportament' />
                <TeamCards images={FinanceDeportment} cardData={cardData} sectionName='Finance Deportament' />
            </div>
    )
}


export default Team;