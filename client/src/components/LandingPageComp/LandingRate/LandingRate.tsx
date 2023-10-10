import React from "react";
import styles from "./LandingRate.module.css";
import { Container, Col, Row, Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const LandingRate = () => {

    return (
        <Container fluid className={styles.wrapper}>
                    <Row>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <Col xxl xl={3} lg={3} md={6} sm={12} xs={12} xxs={12} key={index}>
                                <Card className={styles.Card} style={{ background: '#131517' }}>
                                    <Card.Body className={styles.card}>
                                        <div className={styles.textUp}>
                                            <span className={styles.name}>BTC / INR</span>
                                            <span className={styles.raw}><img src={require('./img/arrow.png')} alt="" />5.76%</span>
                                        </div>
                                        <div className={styles.textDown}>
                                            <span className={styles.coast}>₹ 28,214,25.341</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
        </Container>
    )

}

export default LandingRate;