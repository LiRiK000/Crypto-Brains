import React from "react";
import style from "./OUR.module.css";
import {Button, Container} from "react-bootstrap";

const OUR = () => {
    return (
        <>
            <Container className={style.wrapper}>
                <div className={style.title}><span>Open Job Roles</span></div>
                {Array.from({length: 15}).map((_, index) => (
                    <div>
                        <div className={style.text}>
                            <span>Executive Marketing Manager</span>
                            <div className={style.more}>
                                <span>Marketing</span><div className={style.line}></div>
                                <span>New Delhi, India</span><div className={style.line}></div>
                                <span>Full Time, Remote</span>
                            </div>
                            <a href={"rule"} className={style.a}><button className={style.btn}>Apply now</button></a>
                        </div>
                    </div>
                ))}
            </Container>
        </>
    );
}

export default OUR;