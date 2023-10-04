import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Forms } from "../Forms/Form";
import styles from './Reg.module.css'
import { setUser } from "store/slices/userSlice";
import { Col, Container, Row } from "react-bootstrap";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.refreshToken,
                    id: user.uid,
                    emailVerified: user.emailVerified
                }));
                navigate('/login')
            })
            .catch (console.error);
    }

return (
    <>
            <Container fluid className={styles.wrapper}>
                <Row className={styles.content}>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} col={12}>
                        <div className={styles.textBlock}>
                            <h1 className={styles.title}>Sign Up</h1>
                        </div>
                        <div className={styles.form}>
                            <Forms
                                title="Sign Up"
                                handleClick={handleRegister}
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
                                href="/login"
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
                                    Have an Account? Login Here
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


export { SignUp };