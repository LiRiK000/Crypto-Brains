import React, { FC, useState } from 'react';
import { Button, Card, Container, ListGroup, Row, Col } from 'react-bootstrap';
import { removeUser } from '../../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/use-auth';
import styles from './SBP.module.css';

interface IProps {
    title: string;
    TabCount: number;
    TabsContent: string[];
}

const Sbp: FC<IProps> = (props) => {
    const dispatch = useDispatch();
    let { isAuth, token, email, id } = useAuth();
    const storedToken = localStorage.getItem('token');
    const storedEmail = localStorage.getItem('email');
    const storedId = localStorage.getItem('id');

    const [activeTab, setActiveTab] = useState(0); // Устанавливаем начальное значение активной вкладки на 0

    if (storedEmail && storedToken && storedId) {
        email = storedEmail;
        id = storedId;
        token = storedToken;
        isAuth = true;
    } else window.location.replace('/');

    const handleLogout = () => {
        window.location.reload();
        dispatch(removeUser());
        localStorage.clear();
    };

    return (
        <>
            <Container fluid className={styles.wrapper}>
                <Row>
                    <Col
                        xxl={3}
                        xl={3}
                        lg={4}
                        md={6}
                        sm={12}
                        xs={12}
                        xxs={12}
                        className={styles.sidebar}
                    >
                        <Card
                            style={{
                                marginTop: '20px',
                                marginRight: '24px',
                                marginLeft: '24px',
                                backgroundColor: '#1E1F25',
                                minWidth: '20%',
                                display: 'flex',
                            }}
                        >
                            <Card.Body>
                                <Card.Title
                                    className={styles.SBTitle}
                                    style={{
                                        marginBottom: '20px',
                                        padding: '10px',
                                        backgroundColor: '#272A34',
                                    }}
                                >
                                    {props.title}
                                </Card.Title>
                                <Card.Text
                                    style={{
                                        marginBottom: '10px',
                                        alignItems: 'center',
                                    }}
                                >
                                    {props.TabsContent.map((tab, index) => (
                                        <Button
                                            key={index}
                                            variant={activeTab === index ? 'primary' : ''}
                                            style={{
                                                width: '100%',
                                                marginBottom:'10px',
                                                display: 'flex',
                                            }}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            <h1
                                                className={styles.tabText}
                                            >
                                                {tab}
                                            </h1>
                                        </Button>
                                    ))}
                                </Card.Text>
                                <Button
                                    variant="danger"
                                    onClick={handleLogout}
                                    className="btn-block"
                                >
                                    Log Out from {email}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Sbp;
