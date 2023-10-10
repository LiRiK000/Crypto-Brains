import React from 'react';
import styles from './TS.module.css';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';

const TS = () => {
    return (
        <Container fluid>
            <Row>
                <div className={styles.wrapper}>
                    <Col col={12}>
                        <div className={styles.textBlock}>
                            <div className={styles.titleBlock}>
                                <h1 className={styles.title}>
                                    What Traders Saying About Us!
                                </h1>
                            </div>
                            <div className={styles.subtitleBlock}>
                                <h1 className={styles.subtitle}>
                                    Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled type specimen book.
                                </h1>
                            </div>
                        </div>
                    </Col>
                </div>
            </Row>
            <Row>
                <Col col={12}>
                    <Carousel>
                        <Carousel.Item>
                            <div className={`${styles.imgBlock} d-flex justify-content-center`}>
                                <img
                                    className={`${styles.imgCar} d-block w-25`}
                                    src="https://via.placeholder.com/600x400"
                                    alt="First slide"
                                />
                                <img
                                    className={`${styles.imgCar} d-block w-25`}
                                    src="https://via.placeholder.com/600x400"
                                    alt="First slide"
                                />
                                <img
                                    className={`${styles.imgCar} d-block w-25`}
                                    src="https://via.placeholder.com/600x400"
                                    alt="First slide"
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex justify-content-center">
                                <img
                                    className={`${styles.imgCar} d-block w-25`}
                                    src="https://via.placeholder.com/600x400"
                                    alt="Second slide"
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex justify-content-center">
                                <img
                                    className={`${styles.imgCar} d-block w-25`}
                                    src="https://via.placeholder.com/600x400"
                                    alt="Third slide"
                                />
                            </div>
                        </Carousel.Item>
                        {/* Добавьте дополнительные слайды по аналогии */}
                    </Carousel>






                    {/* <Carousel className={styles.car}>
                        <Carousel.Item>
                            <img className={styles.imgCar} src={require('./img/img1.jpg')} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className={styles.imgCar} src={require('./img/img1.jpg')} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className={styles.imgCar} src={require('./img/img1.jpg')} alt="" />
                        </Carousel.Item>
                    </Carousel> */}
                </Col>
            </Row>
        </Container >
    )
}

export default TS;
