import React from 'react';
import styles from './index.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Col, Row } from 'react-bootstrap';

const man1 = require('./img/1.png');







const Team: React.FC = () => {
    return (
        <Container fluid className={styles.wrapper}>
            <>
                <div className={styles.SectionName}>
                    <h1 className={styles.SectionText}>Team</h1>
                </div>
                <div className={styles.card_wrapper}>
            <Row>
                <Col md={6} lg={3}>
                    <Card className={styles.card} style={{ background: '#131517' }}>
                        <Card.Body>
                            <img src={man1} alt="John Doe" />
                            <Card.Subtitle className={styles.CardOwnerBlock}>
                                <span className={styles.CardOwner}>
                                    John Doe / CEO
                                </span>
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3}>
                    <Card className={styles.card} style={{ background: '#131517' }}>
                        <Card.Body>
                            <img src={man1} alt="John Doe" />
                            <Card.Subtitle className={styles.CardOwnerBlock}>
                                <span className={styles.CardOwner}>
                                    John Doe / CEO
                                </span>
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3}>
                    <Card className={styles.card} style={{ background: '#131517' }}>
                        <Card.Body>
                            <img src={man1} alt="John Doe" />
                            <Card.Subtitle className={styles.CardOwnerBlock}>
                                <span className={styles.CardOwner}>
                                    John Doe / CEO
                                </span>
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3}>
                    <Card className={styles.card} style={{ background: '#131517' }}>
                        <Card.Body>
                            <img src={man1} alt="John Doe" />
                            <Card.Subtitle className={styles.CardOwnerBlock}>
                                <span className={styles.CardOwner}>
                                    John Doe / CEO
                                </span>
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>
            </>
        </Container>
    );
};

export default Team;
