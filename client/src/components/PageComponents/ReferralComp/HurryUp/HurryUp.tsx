import React from "react";
import style from "./HurryUp.module.css";
import {Button, Container} from "react-bootstrap";

const HurryUp = () => {
    return (
        <>
            <Container className={style.wrapper}>
                <div>
                    <span className={style.title}>Hurry Up! Start Earning Now</span><br/>
                    <span className={style.annotation}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</span>
                    <div className={style.btn}>
                        <a href={"apply"}><Button style={{padding:"15px", width:"150px"}}>Refer Now</Button></a>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default HurryUp;