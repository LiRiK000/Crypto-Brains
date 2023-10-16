import React, {FC} from 'react';
import {Card, Row, Col} from 'react-bootstrap'
import styles from './NR.module.css';

interface IProps {
    images: string[];
    title: string;
}
const Nr: FC<IProps> = (props) => {
    return (
        <div className={styles.wrapper}
             style={{
                 marginTop: '120px',
                 marginBottom: '120px',
             }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <h1 className={styles.sectionTitle}>
                    Related News
                </h1>
            </div>
            <Row
                style={{
                    marginRight: '5%',
                    marginTop: '5%',
                    marginLeft: '5%'
                }}
            >
                {props.images.map((image, index) => (
                    <Col key={index} col={3}>
                        <a href="/news-detail">
                            <Card
                                style={{
                                    marginBottom: '5%',
                                    border: '#000 2px solid',
                                    backgroundColor: 'rgba(255,255,255,0.01)',
                                }}
                            >
                                <img src={image} alt={`Изображение ${index + 1}`}/>
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            color: '#ECEEF0',
                                            fontSize: '22px'
                                        }}
                                    >{props.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Nr;