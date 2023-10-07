import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Accordion } from "react-bootstrap";
import styles from "../LandingQuestion/LandingQuestion.module.css";


const LandingQuestion = () => {

    return (
        <div className={styles.wrapper}>
            <>
                <Container>
                    <Container fluid="md" className={styles.blocktext}>
                        <Row>
                            <Col>
                                <div className={styles.textSection}>
                                    <span className={styles.textUp}>Frequently Asked Questions</span>
                                    <span className={styles.textDown}>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Row>
                        <>
                            <Col sm={12} sx={6} xs={12} lg={6} className={styles.container}>
                                <Accordion className={styles.accordion}
                                           style={{
                                               backgroundColor: '#000000'
                                           }}
                                >
                                    <Accordion.Item eventKey="0" className={styles.acc}>
                                        <Accordion.Header
                                            style={{
                                                backgroundColor: '#000000',
                                            }}
                                            className={styles.name}
                                        >What is the difference between Defi and Metaverse ?
                                        </Accordion.Header>
                                        <Accordion.Body className={styles.text}>
                                            When an unknown printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries, but also the
                                            leap into electronic typesetting, remaining essentially unchanged.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Accordion className={styles.accordion}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className={styles.name}>What should I do if Google
                                            verification fails to bind ?</Accordion.Header>
                                        <Accordion.Body className={styles.text}>
                                            When an unknown printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries, but also the
                                            leap into electronic typesetting, remaining essentially unchanged.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Accordion className={styles.accordion}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className={styles.name}>How to complete your KYC Verification
                                            ?</Accordion.Header>
                                        <Accordion.Body className={styles.text}>
                                            When an unknown printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries, but also the
                                            leap into electronic typesetting, remaining essentially unchanged.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Accordion className={styles.accordion}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className={styles.name}>What should I do if I enter the Google
                                            verification code incorrectly ?</Accordion.Header>
                                        <Accordion.Body className={styles.text}>
                                            When an unknown printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries, but also the
                                            leap into electronic typesetting, remaining essentially unchanged.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                            <Col sm={0} sx={6} xs={0} lg={6} className={styles.container}>
                                <Accordion className={styles.accordion}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className={styles.name}>Can We Enter in Website Without Login
                                            or Sign Up ?</Accordion.Header>
                                        <Accordion.Body className={styles.text}>
                                            When an unknown printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries, but also the
                                            leap into electronic typesetting, remaining essentially unchanged.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Accordion className={styles.accordion}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className={styles.name}>What should I do if I lost the binded
                                            phone number ?</Accordion.Header>
                                        <Accordion.Body className={styles.text}>
                                            When an unknown printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries, but also the
                                            leap into electronic typesetting, remaining essentially unchanged.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Accordion className={styles.accordion}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className={styles.name}>How to register an account on the web
                                            ?</Accordion.Header>
                                        <Accordion.Body className={styles.text}>
                                            When an unknown printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries, but also the
                                            leap into electronic typesetting, remaining essentially unchanged.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Accordion className={styles.accordion}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className={styles.name}>How we Change mobile number
                                            ?</Accordion.Header>
                                        <Accordion.Body className={styles.text}>
                                            When an unknown printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries, but also the
                                            leap into electronic typesetting, remaining essentially unchanged.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </>
                    </Row>
                </Container>
            </>
        </div>
    )

}

export default LandingQuestion;