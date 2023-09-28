import React from 'react';
import styles from './index.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap';

const man1 = require('../img/1.png');







const Team = () => {
    return (
        <div className="wrapper">
            <>
                <div className={styles.SectionName}>
                    <h1 className={styles.SectionText}>Team</h1>
                </div>
                <div className="card-wrapper d-flex justify-content-between flex-wrap">
                    <Row>
                        <Col>
                            <Card className="card" style={{ background: '#131517', }} id="1">
                                <Card.Body>
                                    <img src={man1} alt="John Doe" />
                                    <Card.Subtitle className="CardOwnerBlock">
                                        <span className='CardOwner'>
                                            John Doe / CEO
                                        </span>
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="card" style={{ background: '#131517', }} id="1">
                                <Card.Body>
                                    <img src={man1} alt="John Doe" />
                                    <Card.Subtitle className="CardOwnerBlock">
                                        <span className='CardOwner'>
                                            John Doe / CEO
                                        </span>
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="card" style={{ background: '#131517', }} id="1">
                                <Card.Body>
                                    <img src={man1} alt="John Doe" />
                                    <Card.Subtitle className="CardOwnerBlock">
                                        <span className='CardOwner'>
                                            John Doe / CEO
                                        </span>
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="card" style={{ background: '#131517', }} id="1">
                                <Card.Body>
                                    <img src={man1} alt="John Doe" />
                                    <Card.Subtitle className="CardOwnerBlock">
                                        <span className='CardOwner'>
                                            John Doe / CEO
                                        </span>
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        </div>

    );
};

export default Team;
