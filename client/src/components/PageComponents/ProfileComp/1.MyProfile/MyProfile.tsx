import React, {FC, useState} from 'react';
import styles from './MyProfile.module.css'
import {Card, Col, Form, Row} from "react-bootstrap";
const MyProfile: FC = () => {
    const storedEmail : string | null = localStorage.getItem('email')
    const username : string | null = localStorage.getItem('username')
    const id : string | null = localStorage.getItem('id');
    const [value, setValue] = useState<boolean>(false);

    const handleChange = () => {
        setValue(!value);
    };
    const [value2, setValue2] = useState<boolean>(false);

    const handleChange2 = () => {
        setValue2(!value2);
    };
    const [value3, setValue3] = useState<boolean>(false);

    const handleChange3 = () => {
        setValue3(!value3);
    };
    const [value4, setValue4] = useState<boolean>(false);

    const handleChange4 = () => {
        setValue4(!value4);
    };
    return (
        <div className={styles.wrpaper}>
            <div className={styles.content}>
                <div className={styles.profile}>
                    <div className={styles.ImgAndName}>
                        <img className={styles.img} src={require('./img/userImg.png')} alt="UNImg"/>
                        <h1 className={styles.username}>{username}</h1>
                    </div>
                    <div className={styles.email}>
                        <h1 className={styles.emailText}>Email is:</h1>
                        <span className={styles.emailAddress}>{storedEmail}</span>
                    </div>
                    <div className={styles.id}>
                        <h1 className={styles.idText}>You ID is:</h1>
                        <span className={styles.uid}>{id}</span>
                    </div>
                </div>
            </div>
            <div className={styles.cards}>
                <Card
                    className={styles.card}
                    style={{
                        marginTop: '1%'
                    }}>
                    <Row>
                        <Col col={6}>
                            <Card className={styles.card2}>
                                <Row>
                                    <Col col={4} style={{
                                        color: 'white'
                                    }}>Uniswap API Key</Col>
                                    <Col col={4} style={{
                                        color: 'white'
                                    }}>Identity Key</Col>
                                    <Col col={4} style={{
                                        color: 'white'
                                    }}>
                                        <div style={{
                                            display: 'flex'
                                        }}>
                                                    <span style={{
                                                        marginRight: '5px'
                                                    }}>Disable</span>
                                            <Form>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"
                                                    checked={value}
                                                    onChange={handleChange}
                                                />
                                            </Form>
                                            <span>Enable</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col col={6}>
                            <Card className={styles.card2}>
                                <Row>
                                    <Col col={4} style={{
                                        color: 'white'
                                    }}>Uniswap API Key</Col>
                                    <Col col={4} style={{
                                        color: 'white'
                                    }}>Identity Key</Col>
                                    <Col col={4} style={{
                                        color: 'white'
                                    }}>
                                        <div style={{
                                            display: 'flex'
                                        }}>
                                                    <span style={{
                                                        marginRight: '5px'
                                                    }}>Disable</span>
                                            <Form>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"
                                                    checked={value2}
                                                    onChange={handleChange2}
                                                />
                                            </Form>
                                            <span>Enable</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col col={6}>
                            <Card className={styles.card2}>
                                <Row>
                                    <Col col={4} style={{
                                        color: 'white'
                                    }}>Uniswap API Key</Col>
                                    <Col col={4} style={{
                                        color: 'white'
                                    }}>Identity Key</Col>
                                    <Col col={4} style={{
                                        color: 'white'
                                    }}>
                                        <div style={{
                                            display: 'flex'
                                        }}>
                                                    <span style={{
                                                        marginRight: '5px'
                                                    }}>Disable</span>
                                            <Form>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"
                                                    checked={value3}
                                                    onChange={handleChange3}
                                                />
                                            </Form>
                                            <span>Enable</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col col={6}>
                            <Card className={styles.card2}>
                                <Row>
                                    <Col col={4} style={{
                                        color: 'white'
                                    }}>Uniswap API Key</Col>
                                    <Col col={4} style={{
                                        color: 'white'
                                    }}>Identity Key</Col>
                                    <Col col={4} style={{
                                        color: 'white'
                                    }}>
                                        <div style={{
                                            display: 'flex'
                                        }}>
                                                    <span style={{
                                                        marginRight: '5px'
                                                    }}>Disable</span>
                                            <Form>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"
                                                    checked={value4}
                                                    onChange={handleChange4}
                                                />
                                            </Form>
                                            <span>Enable</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>

        </div>
    );
};


export default MyProfile;