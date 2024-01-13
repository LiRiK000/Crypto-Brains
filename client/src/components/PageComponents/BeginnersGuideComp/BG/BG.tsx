import React from 'react';
import {Card, CardTitle, Col, Form, Row} from 'react-bootstrap';
import styles from './BG.module.css';
const Bg = () =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.titleSection}>
                    <h1 className={styles.title}>
                        Beginner’s Guide
                    </h1>
                    <Form.Control
                        type="search here"
                        className={styles.darkForm}
                        placeholder="Search"
                    />
                </div>
                <div className={styles.cards}>
                    <Row>
                        <Col col={3}>
                            <Card className={styles.card}>
                                <Card.Title className={styles.cardText}>All</Card.Title>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card className={styles.card}>
                                <Card.Title className={styles.cardText}>Deposit & Withdrawal</Card.Title>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card className={styles.card}>
                                <Card.Title className={styles.cardText}>Spot Trading</Card.Title>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card className={styles.card}>
                                <Card.Title className={styles.cardText}>Features</Card.Title>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col col={3}>
                            <Card className={styles.card}>
                                <Card.Title className={styles.cardText}>Trading</Card.Title>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card className={styles.card}>
                                <Card.Title className={styles.cardText}>Tokens</Card.Title>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card className={styles.card}>
                                <Card.Title className={styles.cardText}>Crypto</Card.Title>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card className={styles.card}>
                                <Card.Title className={styles.cardText}>Earn</Card.Title>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col col={3}>
                            <Card className={styles.card}>
                                <Card.Title className={styles.cardText}>Finance</Card.Title>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card className={styles.card}>
                                <Card.Title className={styles.cardText}>Margin</Card.Title>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card className={styles.card}>
                                <Card.Title className={styles.cardText}>Chat</Card.Title>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card className={styles.card}>
                                <Card.Title className={styles.cardText}>P2P</Card.Title>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className={styles.cards2}>
                    <Row className={styles.row}>
                        <Col col={6}>
                            <Card className={styles.card}>
                                <Card.Body>
                                    <Card.Title>Introduction About Spot Market</Card.Title>
                                    <Card.Text className={styles.cardText}>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className={styles.card}>
                                <Card.Body>
                                    <Card.Title>Introduction About Spot Market</Card.Title>
                                    <Card.Text className={styles.cardText}>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className={styles.card}>
                                <Card.Body>
                                    <Card.Title>Introduction About Spot Market</Card.Title>
                                    <Card.Text className={styles.cardText}>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className={styles.card}>
                                <Card.Body>
                                    <Card.Title>Introduction About Spot Market</Card.Title>
                                    <Card.Text className={styles.cardText}>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col col={6}>
                            <Card className={styles.card}>
                                <Card.Body>
                                    <Card.Title>Introduction About Spot Market</Card.Title>
                                    <Card.Text className={styles.cardText}>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className={styles.card}>
                                <Card.Body>
                                    <Card.Title>Introduction About Spot Market</Card.Title>
                                    <Card.Text className={styles.cardText}>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className={styles.card}>
                                <Card.Body>
                                    <Card.Title>Introduction About Spot Market</Card.Title>
                                    <Card.Text className={styles.cardText}>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className={styles.card}>
                                <Card.Body>
                                    <Card.Title>Introduction About Spot Market</Card.Title>
                                    <Card.Text className={styles.cardText}>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
export default Bg;