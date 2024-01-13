import React from "react";
import style from "./Referral.module.css";
import {Container, Col, Button} from "react-bootstrap";

const ReferralMod = () => {
    return (
        <>
            <Container className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.left}>
                        <div>
                            <h2 className={style.title}>Refer To Friend</h2>
                            <span className={style.annotation}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            <br/><br/>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
                        </div>
                        <div style={{marginTop:"7%"}}>
                            <a href={"apply"}><Button style={{padding:"2%", width:"300px"}}>Refer Now</Button></a>
                        </div>
                    </div>
                    <div className={style.right}>
                        <img src={require("./1.png")}/>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default ReferralMod;