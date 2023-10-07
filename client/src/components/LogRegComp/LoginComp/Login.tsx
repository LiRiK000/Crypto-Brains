import { FC } from "react";
import { Forms } from "../Forms/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { setUser } from "store/slices/userSlice";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";
const Log: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();





    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.refreshToken,
                    id: user.uid,
                    emailVerified: user.emailVerified
                }));
                if (user.refreshToken && user.email && user.uid) {
                    localStorage.setItem('token', user.refreshToken);
                    localStorage.setItem('email', user.email);
                    localStorage.setItem('id', user.uid);
                    console.log(user);
                }
                navigate('/')
            })
            .catch(console.error);

    }
    localStorage.setItem('currentUser', JSON.stringify(setUser));
    return (
        <>
            <Container fluid className={styles.wrapper}>
                <Row className={styles.content}>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} col={12}>
                        <div className={styles.textBlock}>
                            <h1 className={styles.title}>Login</h1>
                        </div>
                        <div className={styles.form}>
                            <Forms
                                title="Login"
                                handleClick={handleLogin}
                            />
                        </div>
                        <div className={styles.FP}>
                            <a
                                href="/forgot-pass"
                                style={{
                                    textDecoration: 'none'
                                }}>
                                <h1
                                    className={styles.FPText}
                                    style={{
                                        color: '#ECEEF0',
                                        fontFamily: 'sans-serif',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                    }}
                                >
                                    Forgot Password?
                                </h1>
                            </a>
                        </div>
                        <div className={styles.FP}>
                            <a
                                href="/register"
                                style={{
                                    textDecoration: 'none'
                                }}>
                                <h1
                                    className={styles.FPText2}
                                    style={{
                                        color: '#ECEEF0',
                                        fontFamily: 'sans-serif',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                    }}
                                >
                                    Don’t Have an Account? Sign Up Here
                                </h1>
                            </a>
                        </div>
                        <div className={styles.FP}>
                            <a
                                href="/"
                                style={{
                                    textDecoration: 'none'
                                }}>
                                <h1
                                    className={styles.FPText3}
                                    style={{
                                        color: '#ECEEF0',
                                        fontFamily: 'sans-serif',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                    }}
                                >
                                    Home
                                </h1>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export { Log };