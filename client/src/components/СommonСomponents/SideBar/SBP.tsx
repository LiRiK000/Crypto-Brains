import React, { FC, useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { removeUser } from '../../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/use-auth';
import styles from './SBP.module.css';

interface ITab {
    content: React.ReactNode;
}

interface IProps {
    tabs: ITab[],
    title: string,
    TabCount: number,
    TabsContent: Array<string>
}

const Sbp: FC<IProps> = (props) => {
    const dispatch = useDispatch();
    let  {email} = useAuth();
    const [activeTab, setActiveTab] = useState(0);
    const handleLogout = () => {
        window.location.reload();
        dispatch(removeUser());
        localStorage.clear();
    };


    const storedEmail = localStorage.getItem('email');
    const storedId = localStorage.getItem('id');

    if (storedEmail && storedId) {
        email = storedEmail
    } else (
        window.location.replace('/')
    )


    return (
        <>
            <Container fluid>
                <Row>
                    <Col
                        xxl={3}
                        xl={3}
                        lg={3}
                        md={6}
                        sm={12}
                        xs={12}
                        xxs={12}
                    >
                        <Card
                            style={{
                                marginTop: '20px',
                                marginRight: '24px',
                                marginLeft: '14px',
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
                                        padding: '10px',
                                    }}
                                >
                                    {props.tabs.map(function (tab, index) {
                                        return <Button
                                            key={index}
                                            variant={activeTab === index ? 'primary' : ''}
                                            style={{
                                                display: 'flex',
                                                width: '100%',
                                                marginBottom: '10px'
                                            }}
                                            onClick={() => setActiveTab(index)} // Устанавливаем активную вкладку
                                        >
                                            <h1
                                                className={styles.tabText}
                                            >
                                                {props.TabsContent[index]}
                                            </h1>
                                        </Button>;
                                    })}

                                    <Button
                                        variant="danger"
                                        onClick={handleLogout}
                                        className="btn-block"
                                        style={{
                                            marginTop:'10px',
                                            marginBottom: '10px',
                                            width:'100%'
                                        }}
                                    >
                                        Log Out from {localStorage.getItem('username')}
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={9} xl={9} lg={9} md={6} sm={12} xs={12} xxs={12}>
                        {props.tabs[activeTab].content} {/* Отображаем содержимое активной вкладки */}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Sbp;