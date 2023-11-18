import React from "react";
import style from "./LineTrade.module.css";
import {Card, Col, Container} from "react-bootstrap";
import styles from "../../LandingPageComp/LandingRate/LandingRate.module.css";
import {Input} from "@mui/material";

const LineTrade = () => {
    return (
        <>
            <Container className={style.wrapper}>
                <span className={style.open}>Market Overview</span>
                <div className={style.navbar}>
                    <div className={style.titles}>
                        <span>Watchlist</span>
                        <span>USDT</span>
                        <span>BTC</span>
                        <span>TRX</span>
                        <span className={style.del}>DAI</span>
                        <span className={style.del}>BUSD</span>
                        <span className={style.del}>Defi</span>
                        <span className={style.del}>BNB</span>
                        <span className={style.del}>XRP</span>
                    </div>
                    <Col lg={3} className={style.sectionInt}>
                        <div style={{borderColor:'white'}}>
                        <form action="#" method="post" className={style.input}>
                            <a href={"#"}><img src={require('./Loop.png')} style={{width:'100%', paddingRight:'3px'}}/></a>
                            <input className={style.input} type={'input'} placeholder="Search Here"/>
                        </form>
                        </div>
                    </Col>
                </div>
                <div className={style.bar}>
                    <span>Coin Name</span>
                    <span>Price</span>
                    <span>24h Change</span>
                    <span className={style.del}>24h Volume</span>
                    <span className={style.del}>24h High</span>
                    <span className={style.del}>Market Cap</span>
                    <span className={style.del}>Action</span>
                </div>
                <div className={style.line}></div>
                <div className={style.array}>
                    {Array.from({length: 20}).map((_, index) => (
                        <div>
                            <div className={style.card}>
                                <span>Bitcoin / BTC</span>
                                <span>₹ 24,842,27.65</span>
                                <span>+ 5.76%</span>
                                <span className={style.del}>₹ 3,01,25,65,275.52</span>
                                <span className={style.del}>₹ 28,482,37.18</span>
                                <span className={style.del}>₹ 8,56,54,456.95</span>
                                <span className={style.del}>Trade</span>
                            </div>
                            <div className={style.line}></div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
}

export default LineTrade;