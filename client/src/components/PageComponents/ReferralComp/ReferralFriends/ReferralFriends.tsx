import React from "react";
import style from "./ReferralFriends.module.css";
import {Container, Col, Button} from "react-bootstrap";

const ReferralFriends = () => {
    return (
        <>
            <Container className={style.wrapper}>
                <Col className={style.blockText}>
                    <div className={style.container}>
                        <div className={style.CB}>
                            <div className={style.blueLine}></div>
                            <span>Crypto Brains</span>
                        </div>
                        <div className={style.RF}>
                            <span className={style.title}>Refer Friends and Earn Rewards Every Referral.</span>
                            <div className={style.line}></div>
                            <span className={style.annotation}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                        </div>
                        <div className={style.btn}>
                            <a href={"apply"}><Button style={{padding:"5%", width:"100%"}}>Start Earning Now</Button></a>
                        </div>
                    </div>
                </Col>
                <Col className={style.blockImg}>
                    <div className={style.img}>
                        <img src={require("./working.png")} alt={"working"}/>
                    </div>
                </Col>
            </Container>
        </>
    );
}

export default ReferralFriends;