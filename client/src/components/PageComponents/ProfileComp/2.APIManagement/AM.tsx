import React, {FC, useState} from 'react';
import {Button, Row, Col, Container, Card, ToggleButtonGroup, ToggleButton, Form} from "react-bootstrap";
import styles from './AM.module.css';


const AM: FC = () => {
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
        <Container fluid>
            <div className={styles.wrapper}>
                <Row>
                    <div className={styles.cards}>
                        <Card
                            className={styles.card}
                            style={{
                                marginTop: '1%'
                            }}>
                            <div className={styles.textBlock}>
                                <h1 className={styles.Bank}>
                                    Your API key
                                </h1>
                            </div>
                            <Card.Text>
                                <div className={styles.textBlock2}>
                                    <h1>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                                        excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                                        rerum facilis est et expedita distinctio.
                                    </h1>
                                </div>
                                <Card className={styles.card2}>
                                    <Card.Text>
                                        <div className={styles.cardTextBlock}>
                                            <h1 className={styles.left}>
                                                You Don't Have any API Keys Yet
                                            </h1>
                                            <h1 className={styles.right} style={{textAlign: 'right'}}>
                                                <Button>Create API key</Button>
                                            </h1>
                                        </div>
                                    </Card.Text>
                                </Card>
                            </Card.Text>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <div className={styles.cards}>
                        <Card
                            className={styles.card}
                            style={{
                                marginTop: '1%'
                            }}>
                            <div className={styles.textBlock}>
                                <h1 className={styles.Bank}>
                                    API Keys
                                </h1>
                            </div>
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
                </Row>
            </div>
        </Container>
    );
}

export default AM;
