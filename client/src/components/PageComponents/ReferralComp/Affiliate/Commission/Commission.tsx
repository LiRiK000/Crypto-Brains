import React from "react";
import style from "./Commission.module.css";
import {Button, Container} from "react-bootstrap";

const Commission = () => {
    return (
        <>
            <Container className={style.wrapper}>
                <div className={style.title}>Earn Up To 50% Commission!</div>
                <div className={style.main}>
                    <div className={style.block}>
                        <span style={{color: "white"}}>Senior Level Commission</span>
                        <span>Earn Up To 55%</span>
                        <a href={"apply"} style={{width: "20%"}}><Button className={style.btn}>Start Now</Button></a>
                    </div>
                    <div className={style.block}>
                        <span style={{color: "white"}}>Middle Level Commission</span>
                        <span>Earn Up To 40%</span>
                        <a href={"apply"} style={{width: "20%"}}><Button className={style.btn}>Start Now</Button></a>
                    </div>
                    <div className={style.block}>
                        <span style={{color: "white"}}>Junior Level Commission</span>
                        <span>Earn Up To 25%</span>
                        <a href={"apply"} style={{width: "20%"}}><Button className={style.btn}>Start Now</Button></a>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Commission;