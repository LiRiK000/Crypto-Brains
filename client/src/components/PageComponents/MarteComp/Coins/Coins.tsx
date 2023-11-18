import React from "react";
import style from "./Coins.module.css";
import {Card, Col, Container, Row} from "react-bootstrap";
import styles from "../../BlogTradeComp/BlogTradeComp.module.css";

interface ICoinsProps {
    cardData: {imageIndex: number}[];
    name: string[];
    price: string[];
    imagesB: string[];
    imagesP: string[];
    imagesG: string[];
}

const Coins: React.FC<ICoinsProps> = (props:ICoinsProps) => {
    return (
        <>
            <Container className={style.wrapper}>
                <Row>
                    {props.cardData.map((card, imagesB, imagesP) => (
                        <Col md={6} lg={2}>
                            <Card className={styles.card}>
                                <Card className={styles.CardBody}>
                                    <div className={style.body}>
                                        <img className={style.imgB} src={props.imagesB[card.imageIndex]}/><br/>
                                        <span className={style.title}>{props.name[card.imageIndex]}</span><br/>
                                        <img className={style.imgP} src={props.imagesP[card.imageIndex]}/><br/>
                                        <span className={style.price}>₹ {props.price[card.imageIndex]}</span><br/>
                                        <img className={style.imgG} src={props.imagesG[card.imageIndex]}/>
                                    </div>
                                </Card>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Coins;