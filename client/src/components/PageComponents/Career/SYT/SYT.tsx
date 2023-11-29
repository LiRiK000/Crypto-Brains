import React from "react";
import style from "./SYT.module.css";
import {Container, Col} from "react-bootstrap";

const SYT = () => {
    return (
        <>
            <Container className={style.wrapper}>
                <div className={style.headblock}>
                    <span style={{fontSize: "240%"}}>Select Your Team For Job</span>
                    <div className={style.blockint}>
                        <a href={"#"}><img src={require('../../MarteComp/LineTrade/Loop.png')}/></a>
                        <input className={style.input} type={'input'} placeholder="Search Location"/>
                    </div>
                </div>
                <div className={style.line}></div>
                <Col xxl xl={12} lg={12} md={12}>
                    <div className={style.container}>
                        <div className={style.item}><span>Legal (10)</span></div>
                        <div className={style.item}><span>Marketing (15)</span></div>
                        <div className={style.item}><span>Engineering (5)</span></div>
                        <div className={style.item}><span>Finance (8)</span></div>
                        <div className={style.item}><span>Founder (4)</span></div>
                        <div className={style.item}><span>Security (8)</span></div>
                        <div className={style.item}><span>Data (12)</span></div>
                        <div className={style.item}><span>Analytics (2)</span></div>
                        <div className={style.item}><span>Product (10)</span></div>
                        <div className={style.item}><span>Trading (14)</span></div>
                        <div className={style.item}><span>Support (18)</span></div>
                        <div className={style.item}><span>HR Management (1)</span></div>
                    </div>
                </Col>
            </Container>
        </>
    );
}

export default SYT;