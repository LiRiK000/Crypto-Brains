import React from "react";
import styles from "./LandingMainPage.module.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./img/arrow.png"



const LandingMainPage = () => {

    return (
        <div className={styles.wrapper}>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={11} lg={8} xl={7}>
                        <div className={styles.cryptoBrains}>
                            <div className={styles.textLine}>
                                <div className={styles.line1}></div>
                                <span className={styles.cryptobrains}>Crypto Brains</span>
                            </div>
                            <div className={styles.textSection}>
                                <span className={styles.text}>Buy & Sell Crypto Easy With Crypto Brains</span>
                                <div className={styles.line2}></div>
                            </div>
                            <div className={styles.textDown}>
                                <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                            </div>
                        </div>
                        <div className={styles.buttonSection}>
                            <a href="/login">
                                <Button className={styles.btn1}>
                                    Start Now
                                    <img src={img} alt=""/>
                                </Button>
                            </a>
                            <a href="/beginner">
                                <Button className={styles.btn2}>
                                    Beginner’s Guide
                                </Button>
                            </a>
                        </div>
                    </Col>
                    <Col col={4} md={0} lg={4} className={styles.imgCol}>
                        <div className={styles.imageSetction}>
                            <div className={styles.img1}>
                                <img src={require('./img/laptop.png')} alt="Laprop" className={styles.img1}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

} 

export default LandingMainPage;