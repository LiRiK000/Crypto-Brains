import React, { FC } from "react";
import Menu from "../../components/Menu/Menu";
import Market from "../../components/MarketTrends/MarketTrends";
import Team from "../../components/Team/index";




const ManagmentDeportment = [require('../../components/Team/img/1.png'), require('../../components/Team/img/2.png'), require('../../components/Team/img/3.png'), require('../../components/Team/img/4.png')];
const HRDeportment = [require('../../components/Team/img/5.png'), require('../../components/Team/img/6.png'), require('../../components/Team/img/7.png'), require('../../components/Team/img/8.png')];
const MarketingDeportment = [require('../../components/Team/img/9.png'), require('../../components/Team/img/10.png'), require('../../components/Team/img/11.png'), require('../../components/Team/img/12.png')];
const FinanceDeportment = [require('../../components/Team/img/13.png'), require('../../components/Team/img/14.png'), require('../../components/Team/img/15.png'), require('../../components/Team/img/16.png')];





const cardData = [
    {name: 'John Doe', position: 'CEO', imageIndex:0},
    {name: 'John Doe', position: 'CEO', imageIndex:1},
    {name: 'John Doe', position: 'CEO', imageIndex:2},
    {name: 'John Doe', position: 'CEO', imageIndex:3}
]


const Home: FC = () => {
    return (
        <>
            <Menu />
            <Market />
            <Team images={ManagmentDeportment} cardData = {cardData} sectionName='Managment Deportament'/>
            <Team images={HRDeportment} cardData = {cardData} sectionName='HR Deportament'/>
            <Team images={MarketingDeportment} cardData = {cardData} sectionName='Marketing Deportament'/>
            <Team images={FinanceDeportment} cardData = {cardData} sectionName='Finance Deportament'/>
        </>
    ) 
}

export default Home;