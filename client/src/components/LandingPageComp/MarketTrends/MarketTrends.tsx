import { FC } from "react";
import styles from './MarketTrends.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Container, Button, Col, Row } from 'react-bootstrap';




const positive = require('./img/1.png');
// const negative = require('./img/2.png');
const BTC = require('./img/BTC.png');
const arrowUp = require('./img/arrowUp.png');
// const arrowDown = require('./img/arrowDown.png');




const MarketTrends: FC = () => {
    return (
        <Container fluid className={styles.wrapper}>
            <>
                <div className={styles.SectionName}>
                    <h1>Market Trends</h1>
                </div>
                <div className={styles.card_wrapper}>
                    <Row>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <Col xxl xl={4} lg={4} md={6} sm={12} xs={12} xxs={12} key={index}>

                                <Card className={styles.card} style={{ background: '#131517' }}>
                                    <Card.Body>
                                        <br />
                                        <Card.Title className="text-center title-card text-white">
                                            <img className="img-card" src={BTC} alt="BTC" /> <br />
                                            Bitcoin / BTC <br />
                                            <img src={arrowUp} alt="Up" /> <br /> <br />
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-center text-white" style={{fontFamily: 'sans-serif'}}>₹ 28,214,25.341</Card.Subtitle>
                                        <Card.Img src={positive} alt="Positive" />
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="Btn-container d-flex justify-content-center mb-120">
                        <Button variant="primary" className="btn btn-lg text-center" id='Btn' style={{
                            marginBottom: '120px', marginTop: '60px', alignItems: 'center',
                            gap: '60px', alignSelf: 'stretch'
                        }}>See All Market</Button>
                    </div>
                </div>
            </>
        </Container>


    );
}
export default MarketTrends;