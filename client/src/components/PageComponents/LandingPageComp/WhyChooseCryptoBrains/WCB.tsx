import React, { useRef } from "react";
import styles from './WCB.module.css';
import { Button, Row, Col, Container, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



const WCB = () => {
//     const width = window.innerWidth;
//     if (width < 550){
//         const ref=document.getElementById("colFirst");
//     ref.setAttribute('col', '12');
// } 
    return (
        <div className={styles.wrapper}>
            <Container fluid>
                <div className={styles.textSection}>
                    <div className={styles.title}>
                        <h1 className={styles.titleText}>Why Choose Crypto Brains!</h1>
                    </div>
                    <div className={styles.subtitle}>
                        <p className={styles.subText}>
                            When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                <Row>
                    <Col xs={12} sm={12} md={8}  xl={7}>
                        <div className={styles.reasons}>
                            <div className={styles.reason}>
                                <div className={styles.icon}>
                                    <img src={require('./img/01.png')} alt="01" />
                                </div>
                                <div className={styles.reasonText}>
                                    <h3 className={styles.reasonTitle}>Easy Trading</h3>
                                    <div className={styles.textBlock}>
                                        <span className={styles.reasonText}>
                                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.button}>
                                    <Button className={styles.buttonText} variant="">
                                        Start Now
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.reason}>
                                <div className={styles.icon}>
                                    <img src={require('./img/02.png')} alt="02" />
                                </div>
                                <div className={styles.reasonText}>
                                    <h3 className={styles.reasonTitle}>Easy Trading</h3>
                                    <div className={styles.textBlock}>
                                        <span className={styles.reasonText}>
                                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.button}>
                                    <Button className={styles.buttonText} variant="">
                                        Start Now
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.reason}>
                                <div className={styles.icon}>
                                    <img src={require('./img/03.png')} alt="03" />
                                </div>
                                <div className={styles.reasonText}>
                                    <h3 className={styles.reasonTitle}>Easy Trading</h3>
                                    <div className={styles.textBlock}>
                                        <span className={styles.reasonText}>
                                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.button}>
                                    <Button className={styles.buttonText} variant="">
                                        Start Now
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.reason}>
                                <div className={styles.icon}>
                                    <img src={require('./img/04.png')} alt="04" />
                                </div>
                                <div className={styles.reasonText}>
                                    <h3 className={styles.reasonTitle}>Easy Trading</h3>
                                    <div className={styles.textBlock}>
                                        <span className={styles.reasonText}>
                                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.button}>
                                    <Button className={styles.buttonText} variant="">
                                        Start Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col col={4} className={styles.imgCol} id='colFirst'>
                        <div className={styles.image}>
                            <img src={require('./img/R19 1.png')} alt="Money" className={styles.img1} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WCB;