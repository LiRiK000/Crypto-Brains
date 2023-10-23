import React from 'react';
import styles from './index.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Col, Row } from 'react-bootstrap';

interface ITeamProps {
    cardData: { name: string; position: string; imageIndex: number }[];
    images: string[];
    sectionName: string;
}

const TeamCards: React.FC<ITeamProps> = (props : ITeamProps) => {
    return (
        <Container fluid className={styles.wrapper}>
            <>
                <div className={styles.card_wrapper}>
                    <Row>
                        <div className={styles.SectionName}>
                            <h1 className={styles.SectionText}>{props.sectionName}</h1>
                        </div>
                        {props.cardData.map((card, index) => (
                            <Col md={6} lg={3} key={index}>
                                <Card className={styles.card} style={{ background: '#1E1F25' }}>
                                    <Card.Body>
                                        <img src={props.images[card.imageIndex]} alt={card.name} />
                                        <Card.Subtitle className={styles.CardOwnerBlock}>
                                            <span className={styles.CardOwner}>
                                                {card.name} / {card.position}
                                            </span>
                                            <div className={styles.icons}>
                                                <a href="#" className={styles.iconTelegram}>
                                                    <img src={require('./img/Component 3.png')} alt="telegram" className={styles.iconTelegram} />
                                                </a>
                                                <a href="#" className={styles.iconInstagram}>
                                                    <img src={require('./img/Component 5.png')} alt="Instagram" className={styles.iconInstagram} />
                                                </a>
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
    );
};

export default TeamCards;
