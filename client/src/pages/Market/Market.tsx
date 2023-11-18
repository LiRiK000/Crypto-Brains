import React from "react";
import style from "./Market.module.css";
import Coins from "../../components/PageComponents/MarteComp/Coins/Coins";
import MenuCont from "../../components/СommonСomponents/MenuContext/MenuContext";
import LFooter from "../../components/СommonСomponents/Footer/LFooter";
import LineTrade from "../../components/PageComponents/MarteComp/LineTrade/LineTrade";
import {Container} from "react-bootstrap";

const cardDate = [{imageIndex:0}, {imageIndex:1},{imageIndex:2}, {imageIndex:3}, {imageIndex:4}, {imageIndex:5}]

const name : string[] = ["Bitcoin","BTS / BTC","DGD / BTC","Ethos / BTC","KMD / BTC","Qtum / BTC"]

const price : string[] = ["28,214,25.341", "2,541.12","284.64","1,146,25.96","245.21","19,954.72"]

const imagesB : string[] = [require('./imgB/1.png'),require('./imgB/2.png'),require('./imgB/3.png'),require('./imgB/4.png'),require('./imgB/5.png'),require('./imgB/6.png')]
const imagesP : string[] = [require('./imgP/1.png'),require('./imgP/2.png'),require('./imgP/1.png'),require('./imgP/2.png'),require('./imgP/2.png'),require('./imgP/1.png')]
const imagesG : string[] = [require('./imgG/11.png'),require('./imgG/22.png'),require('./imgG/11.png'),require('./imgG/22.png'),require('./imgG/22.png'),require('./imgG/11.png')]

const Market = () => {
    return (
        <>
            <MenuCont></MenuCont>
            <div>
                <span className={style.title}>Featured Coins</span>
            </div>
            <Coins cardData={cardDate} name={name} price={price} imagesB={imagesB} imagesP={imagesP}
                   imagesG={imagesG}/>
            <Container fluid className={style.wrapper}>
                <div className={style.line}></div>
            </Container>
            <LineTrade></LineTrade>
            <LFooter></LFooter>
        </>
    );
}

export default Market;