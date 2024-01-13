import React, { FC } from 'react';
import styles from './NewsContent.module.css';
import { Card, Col, Row } from "react-bootstrap";

interface IProps {
    images: string[];
    title: string;
}

const NewsContent: FC<IProps> = (props) => {
    return (
        <div
            className={styles.wrapper}
            style={{
                marginTop: '120px',
                marginBottom: '120px'
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '#FFF 1px solid',
                marginLeft: '5%',
                marginRight: '5%'
            }}>
                <h1
                    className={styles.sectionTitle}
                >
                    News
                </h1>
            </div>
            <Row
                style={{
                    marginRight: '5%',
                    marginTop: '5%',
                    marginLeft: '5%',
                }}>
                {props.images.map
                ((image : string, index : number) =>
                    (
                        <Col
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            key={index}
                            style={{
                                marginBottom: '40px'
                            }}
                        >
                            <a href="/news-detail">
                                <Card style={{
                                    marginBottom: '5%',
                                    border: '#000 2px solid',
                                    backgroundColor: 'rgba(255,255,255,0.01)',
                                }}>
                                    <img src={image} alt={`Изображение ${index + 1}`}/>
                                    <Card.Body>
                                        <Card.Title style={{
                                            color: '#ECEEF0',
                                            fontSize: '22px',
                                        }}>
                                            {props.title}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    ))}
            </Row>
        </div>
    );
}

export default NewsContent;