import React from "react";
import style from "./AffiliateProgram.module.css";
import {Button, Container} from "react-bootstrap";

const AffiliateProgram = () => {
    return(
        <>
            <Container className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.CB}>
                        <div className={style.line}></div>
                        <span>Crypto Brains</span>
                    </div>
                    <main className={style.blockTitle}>
                        <span style={{fontSize:"450%"}}>Join Our Affiliate Program And Earn Commissions</span>
                        <span style={{color:"#7D7D7DFF"}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </main>
                    <div className={style.blockBtn}>
                        <a href={"apply"}><Button className={style.btn}>Become Affiliate</Button></a>
                        <a href={"apply"}><Button className={style.btn}>Already Affiliate</Button></a>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AffiliateProgram;