import React from "react";
import './MarketTrends.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button, Col, Row } from 'react-bootstrap';




const positive = require('./img/1.png');
const negative = require('./img/2.png');
const BTC = require('./img/BTC.png');
const arrowUp = require('./img/arrowUp.png');
const arrowDown = require('./img/arrowDown.png');




const MarketTrends = () => {
    return (
        <div className="wrapper">
            <>
                <div className="SectionName">
                    <h1 className="SectionName2">Market Trends</h1>
                </div>
                <div className="card-wrapper d-flex justify-content-between flex-wrap">
                    <Row>
                        <Col>
                            <Card className="card" style={{ background: '#131517', }} id="1">
                                <Card.Body>
                                    <Card.Title className="text-center title-card">
                                        <img className="img-card" src={BTC} alt="BTC" /> <br />
                                        Bitcoin / BTC <br />
                                        <img src={arrowUp} alt="Up" /> <br /> <br />
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-center subtitle-card">₹ 28,214,25.341</Card.Subtitle>
                                    <Card.Img src={positive} alt="Positive" />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="card" style={{ background: '#131517', }} id="1">
                                <Card.Body>
                                    <Card.Title className="text-center title-card">
                                        <img className="img-card" src={BTC} alt="BTC" /> <br />
                                        Bitcoin / BTC <br />
                                        <img src={arrowUp} alt="Up" /> <br /> <br />
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-center subtitle-card">₹ 28,214,25.341</Card.Subtitle>
                                    <Card.Img src={positive} alt="Positive" />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="card" style={{ background: '#131517', }} id="1">
                                <Card.Body>
                                    <Card.Title className="text-center title-card">
                                        <img className="img-card" src={BTC} alt="BTC" /> <br />
                                        Bitcoin / BTC <br />
                                        <img src={arrowUp} alt="Up" /> <br /> <br />
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-center subtitle-card">₹ 28,214,25.341</Card.Subtitle>
                                    <Card.Img src={positive} alt="Positive" />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="card" style={{ background: '#131517', }} id="1">
                                <Card.Body>
                                    <Card.Title className="text-center title-card">
                                        <img className="img-card" src={BTC} alt="BTC" /> <br />
                                        Bitcoin / BTC <br />
                                        <img src={arrowUp} alt="Up" /> <br /> <br />
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-center subtitle-card">₹ 28,214,25.341</Card.Subtitle>
                                    <Card.Img src={positive} alt="Positive" />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="card" style={{ background: '#131517', }} id="1">
                                <Card.Body>
                                    <Card.Title className="text-center title-card">
                                        <img className="img-card" src={BTC} alt="BTC" /> <br />
                                        Bitcoin / BTC <br />
                                        <img src={arrowUp} alt="Up" /> <br /> <br />
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-center subtitle-card">₹ 28,214,25.341</Card.Subtitle>
                                    <Card.Img src={positive} alt="Positive" />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="Btn-container">
                    <Button variant="primary" className="btn btn-lg btn-block text-center" id="Btn" >See All Market</Button>
                </div>
            </>
        </div>
    );
}

export default MarketTrends;