import React from "react";
import styles from "../TeamPageComp/Team/index.module.css";
import {Card, Col, Container, Row} from "react-bootstrap";


interface IBlogTradeCompProps {
    cardData: {imageIndex: number}[];
    images: string[];
}

const BlogCards: React.FC<IBlogTradeCompProps> = (props) => {
    return (
        <Container fluid className={styles.wrapper}>
            <>
                <div className={styles.card_wrapper}>
                    <Row>
                        {props.cardData.map((card, index) => (
                            <Col md={6} lg={3} key={index}>
                                <Card className={styles.card} style={{ background: '#131517' }}>
                                    <Card.Body className={styles.CardBody}>
                                        <img src={props.images[card.imageIndex]}/>
                                        <Card.Subtitle className={styles.sectionText}>
                                            <div>
                                                <span>20 Mar, 2022</span>
                                                <span>5 Mins Read</span>
                                            </div>
                                                <span className={styles.title}>
                                                    Crypto Has New Announcement About Russia And...
                                                </span>
                                            <div className={styles.RM}>
                                                <span>Read More</span>
                                            </div>
                                        </Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </>
        </Container>
    )
}

export default BlogCards;