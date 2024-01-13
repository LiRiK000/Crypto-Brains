import React from "react";
import style from "./JUT.module.css";
import {Container, Col,Button} from "react-bootstrap";

const JUT = () => {
    return (
        <>
            <Container className={style.wrapper}>
                <div className={style.sectionText}>
                    <div className={style.CB}>
                        <div className={style.lineBlue}></div>
                        <span>Crypto Brains</span><br/>
                    </div>
                    <div>
                        <span className={style.title}>Join Us Today! And Build Your Best Career</span>
                        <div className={style.line}></div>
                        <span className={style.annotation}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </div>
                    <div className={style.inputBlock}>
                        <div className={style.blockint}>
                            <a href={"#"}><img src={require('../../MarteComp/LineTrade/Loop.png')}/></a>
                            <input className={style.input} type={'input'} placeholder="Search Location"/>
                        </div>
                        <Button className={style.btn}>Search</Button>
                    </div>
                    <div className={style.info}>
                        <div className={style.block}><span style={{fontSize: "190%"}}>10M +</span><br/><span>Trusted Users</span>
                        </div>
                        <div className={style.block}><span style={{fontSize: "190%"}}>₹ 20B +</span><br/><span>Coins Purchased</span>
                        </div>
                        <div className={style.block}><span style={{fontSize: "190%"}}>10M +</span><br/><span>Years of Experience</span>
                        </div>
                    </div>
                </div>
                <Col>
                    <img src={require('./1.png')} style={{width: '110%'}} className={style.img}/>
                </Col>


            </Container>
        </>
    );

}

export default JUT;