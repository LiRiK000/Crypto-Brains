import React from "react";
import style from "./Trading.module.css";
import {Button, Col, Container} from "react-bootstrap";

const Trading = () => {
    return (
        <>
            <Container className={style.wrapper}>
                <div className={style.container}>
                    <div>
                        <h2 style={{fontSize: "240%", color: "white"}}>Easy And Secure Trading With CryptoBrains.</h2>
                        <br/>
                        <span style={{color: "#ADB3BF"}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</span>
                    </div>
                    <div className={style.btnBlock}>
                        <a href={"apply"}><Button style={{padding: "20px"}}>Become Affiliate</Button></a>
                    </div>
                </div>
                <div className={style.line}></div>
                <Col className={style.col}>
                    <div className={style.block}>
                        <div className={style.num}>
                            <h1>01</h1>
                        </div>
                        <div className={style.text}>
                            <span className={style.title}>Create Affiliate Id</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna sed do eiusmod tempor aliqua.</span>
                        </div>
                    </div>
                    <div className={style.block}>
                        <div className={style.num}>
                            <h1>02</h1>
                        </div>
                        <div className={style.text}>
                            <span className={style.title}>Promote Website</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna sed do eiusmod tempor aliqua.</span>
                        </div>
                    </div>
                </Col>
                <Col className={style.col}>
                    <div className={style.block}>
                        <div className={style.num}>
                            <h1>03</h1>
                        </div>
                        <div className={style.text}>
                            <span className={style.title}>User Do Trading</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna sed do eiusmod tempor aliqua.</span>
                        </div>
                    </div>
                    <div className={style.block}>
                        <div className={style.num}>
                            <h1>04</h1>
                        </div>
                        <div className={style.text}>
                            <span className={style.title}>Claim Commission</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna sed do eiusmod tempor aliqua.</span>
                        </div>
                    </div>

                </Col>
                <div className={style.btn}>
                    <div >
                        <a href={"apply"}><Button style={{padding:"20px"}}>Become Affiliate</Button></a>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Trading;