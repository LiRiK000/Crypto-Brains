import React, { FC } from 'react';
import {Button, Row, Col, Container, Card} from "react-bootstrap";
import styles from './PO.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Po: FC = () => {
    return (
        <Container fluid>
            <div className={styles.wrapper}>
                <Row>
                    <div className={styles.textBlock}>
                        <h1 className={styles.Bank}>
                            Bank Details
                        </h1>
                        <h1 className={styles.privacy} style={{textAlign: 'right'}}>
                            Your Bank Information Was 100% Safe With Us.
                        </h1>
                    </div>
                    <div className={styles.cards}>
                        <Col xxl={6} xl={6} lg={12} md={12} sm={12} xs={12} xxs={12} style={{
                            marginRight: '25px'
                        }}>
                            <Card
                                className={styles.card}
                                style={{
                                    display: 'flex',
                                    backgroundColor: '#272A34',
                                    marginTop: '30px'
                                }}>
                                <Card.Text>
                                    <div className={styles.cardTextBlock}>
                                        <h1 className={styles.left}>
                                            Full Name
                                        </h1>
                                        <h1 className={styles.right} style={{textAlign: 'right'}}>
                                            Jerry Smith
                                        </h1>
                                    </div>
                                    <div className={styles.cardTextBlock}>
                                        <h1 className={styles.left}>
                                            Bank Account Number
                                        </h1>
                                        <h1 className={styles.right} style={{textAlign: 'right'}}>
                                            1234567891234
                                        </h1>
                                    </div>
                                    <div className={styles.cardTextBlock}>
                                        <h1 className={styles.left}>
                                            IFSC Code
                                        </h1>
                                        <h1 className={styles.right} style={{textAlign: 'right'}}>
                                            Dummy123456
                                        </h1>
                                    </div>
                                    <div className={styles.btns}>
                                        <Button variant='' className={styles.btn1}>
                                            <h1 className={styles.btnText1}>
                                                Need Help
                                            </h1>
                                        </Button>
                                        <Button variant='primary' className={styles.btn2}>
                                            <h1 className={styles.btnText2}>
                                                Edit Bank Detail
                                            </h1>
                                        </Button>
                                    </div>
                                </Card.Text>
                            </Card>
                        </Col>
                        <Col
                            xxl={6} xl={6} lg={12} md={12} sm={12} xs={12} xxs={12}
                        >
                            <Card
                                className={styles.card}
                                style={{
                                    display: 'flex',
                                    backgroundColor: '#272A34',
                                    marginTop: '30px'
                                }}>
                                <Card.Text>
                                    <div className={styles.cardTextBlock}>
                                        <h1 className={styles.left}>
                                            Full Name
                                        </h1>
                                        <h1 className={styles.right} style={{textAlign: 'right'}}>
                                            Jerry Smith
                                        </h1>
                                    </div>
                                    <div className={styles.cardTextBlock}>
                                        <h1 className={styles.left}>
                                            Bank Account Number
                                        </h1>
                                        <h1 className={styles.right} style={{textAlign: 'right'}}>
                                            1234567891234
                                        </h1>
                                    </div>
                                    <div className={styles.cardTextBlock}>
                                        <h1 className={styles.left}>
                                            IFSC Code
                                        </h1>
                                        <h1 className={styles.right} style={{textAlign: 'right'}}>
                                            Dummy123456
                                        </h1>
                                    </div>
                                    <div className={styles.btns}>
                                        <Button variant='' className={styles.btn1}>
                                            <h1 className={styles.btnText1}>
                                                Need Help
                                            </h1>
                                        </Button>
                                        <Button variant='primary' className={styles.btn2}>
                                            <h1 className={styles.btnText2}>
                                                Edit Bank Detail
                                            </h1>
                                        </Button>
                                    </div>
                                </Card.Text>
                            </Card>
                        </Col>
                    </div>
                </Row>
            </div>
        </Container>
    );
}

export default Po;
