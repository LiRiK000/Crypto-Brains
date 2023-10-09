import React from "react";
import styles from "./ST.module.css";
import { Card, Col, Container, Row, Button } from "react-bootstrap";



interface ISTProps {
    cardData: { name: string,key: string ,description: string, imageIndex: number }[];
    image: string[];
}



const ST: React.FC<ISTProps> = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.SectionName}>
                <h1 className={styles.SectionNameText}>Start Trading In Simple Process</h1>
                <p className={styles.SectionSubtitle}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <Container fluid className={styles.wrapperContain}>
                <>
                    <div className={styles.card_wrapper}>
                        <Row>
                            {props.cardData.map((card, index) => (
                                <Col md={6} lg={3} key={index}>
                                    <Card className={styles.card} style={{ background: '#131517' }}>
                                        <Card.Body>
                                            <div className={styles.imageWrapper}>
                                                <img className={styles.imageDef} src={props.image[card.imageIndex]} alt={card.name} />
                                            </div>
                                            <Card.Subtitle className={styles.CardOwnerBlock}>
                                                <span className={styles.CardOwner}>
                                                    {card.name} <br /> <br />
                                                </span>
                                                <span className={styles.CardDescription}>
                                                    {card.description}
                                                </span>
                                                <div className="btns">
                                                    <Button className={styles.btn} variant="" size="lg">
                                                        <i className={styles.btnText}>{card.key}</i>
                                                    </Button>
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
        </div>
    );
};

export default ST;