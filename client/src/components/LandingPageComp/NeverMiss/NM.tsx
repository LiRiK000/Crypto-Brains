import { FC } from "react";
import styles from "./NM.module.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const NM: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={8}  xl={7}>
                        <div className={styles.textSection}>
                            <h1 className={styles.title}>
                                Never Miss Trading, Download Our Application
                            </h1>
                            <h3 className={styles.subtitle}>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </h3>
                            <div className={styles.buttonSection}>
                                <a href="/" className={styles.hrefBtn}>
                                    <Button variant="" size="lg" className={styles.btn}>
                                        <div className={styles.buttonContent}>
                                            <img src={require('./img/Component 1.png')} alt="Comp1" className={styles.component} />
                                            <span className={styles.btnText}>
                                                App Store
                                            </span>
                                        </div>
                                    </Button>
                                </a>
                                <a href="/" className={styles.hrefBtn}>
                                    <Button variant="" size="lg" className={styles.btn}>
                                        <div className={styles.buttonContent}>
                                            <img src={require('./img/Component 2.png')} alt="Comp2" className={styles.component} />
                                            <span className={styles.btnText}>
                                                Get Started
                                            </span>
                                        </div>
                                    </Button>
                                </a>
                                <a href="/" className={styles.hrefBtn}  >
                                    <Button variant="" size="lg" className={styles.btn}>
                                        <div className={styles.buttonContent}>
                                            <img src={require('./img/Component 3.png')} alt="Comp3" className={styles.component} />
                                        </div>
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col col={4} className={styles.imgCol}>
                        <div className={styles.imageSetction}>
                            <div className={styles.img1}>
                                <img src={require('./img/1.png')} alt="Phone" className={styles.img1} />
                            </div>
                            <div className={styles.img2}>
                                <img src={require('./img/2.png')} alt="Notebook" className={styles.img2} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NM;
