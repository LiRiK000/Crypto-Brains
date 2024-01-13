import React from "react";
import style from "./Hurry.module.css";
import {Container, Col} from "react-bootstrap";

const Hurry = () => {
    return (
        <>
            <Container className={style.wrapper}>
                <Col xxl xl={6} lg={6} md={12}>
                    <div className={style.text}>
                        <span className={style.title}>Hurry Up! Apply Now Your Job Role</span><br/>
                        <span className={style.annotation}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</span><br/>
                        <a href={"rule"}>
                            <button className={style.btn}>Apply Now</button>
                        </a>
                    </div>
                </Col>
                <Col xxl xl={12 - 6} lg={12-6} md={12-6}>
                    <img src={require("./1.png")}/>
                </Col>
            </Container>
        </>
    );
}

export default Hurry;