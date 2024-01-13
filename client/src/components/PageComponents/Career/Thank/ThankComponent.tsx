import React from "react";
import style from "./ThankComponent.module.css";
import {Button, Col, Container} from "react-bootstrap";

const ThankComponent = () => {
    return (
        <>
            <Container className={style.wrapper}>
                <Col className={style.leftBlock}>
                    <div>
                        <span className={style.title}>Thank You !</span>
                        <div className={style.line}></div>
                        <span className={style.annotation}>Your Details Was Successfully Submitted</span>
                        <div className={style.buttonSec}>
                            <a href={'/'}><Button className={style.btn}>Go Home Page</Button></a>
                        </div>
                    </div>
                </Col>
                <Col className={style.rightBlick}>
                    <div className={style.img}>
                        <img src={require("./1.png")} alt={'Thank for register'}/>
                    </div>
                </Col>
            </Container>
        </>
    );
}

export default ThankComponent;