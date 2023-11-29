import React from "react";
import style from "./Apply.module.css";
import {Button, Container} from "react-bootstrap";

const Apply = () => {
    return (
        <>
            <Container className={style.wrapper}>
                <div><h1 style={{marginBottom: "6%"}}>Application Form</h1></div>
                <div>
                    <h4>Basic Information</h4>
                    <div className={style.section}>
                        <div className={style.block}>
                            <span>First Name <span style={{color: "red"}}>*</span></span>
                            <input placeholder="Type Here" id={"requiredField"}/>
                        </div>
                        <div className={style.block}>
                            <span>Last Name</span>
                            <input placeholder="Type Here"/>
                        </div>
                    </div>
                    <div className={style.section}>
                        <div className={style.block}>
                            <span>Phone No <span style={{color: "red"}}>*</span></span>
                            <input placeholder="Type Here" id={"requiredField"}/>
                        </div>
                        <div className={style.block}>
                            <span>Email Address <span style={{color: "red"}}>*</span></span>
                            <input placeholder="Type Here" id={"requiredField"}/>
                        </div>
                    </div>
                </div>
                <div className={style.line}></div>
                <div>
                    <h4>Address Information</h4>
                    <div className={style.section}>
                        <div className={style.block}>
                            <span>Address</span>
                            <input placeholder="Type Here"/>
                        </div>
                        <div className={style.block} style={{flexDirection: "row"}}>
                            <div className={style.miniBlock}>
                                <span>State</span>
                                <input placeholder="Type Here"/>
                            </div>
                            <div className={style.miniBlock}>
                                <span>Pincode</span>
                                <input placeholder="Type Here"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.line}></div>
                <div>
                    <h4>Location Detail</h4>
                    <div className={style.section}>
                        <div className={style.block}>
                            <span>What Loaction You Want for Work <span style={{color: "red"}}>*</span></span>
                            <div className={style.checkbox}>
                                <div>
                                    <input type="checkbox"/><span>New Delhi</span>
                                </div>
                                <div>
                                    <input type="checkbox"/><span>Chandigarh</span>
                                </div>
                                <div>
                                    <input type="checkbox"/><span>Chennai</span>
                                </div>
                            </div>
                        </div>
                        <div className={style.block}>
                            <span>Are You Citizen of India<span style={{color: "red"}}>*</span></span>
                            <div className={style.radio}>
                                <div>
                                    <input type="radio" id="check1"/>
                                    <span>Yes</span>
                                </div>
                                <div>
                                    <input type="radio" id="check1"/>
                                    <span>No</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.scratch}>
                    <h4>Id Details</h4>
                    <div className={style.section}>
                        <div className={style.block}>
                            <span>Resume/CV <span style={{color: "red"}}>*</span></span>
                            <div className={style.attach}>
                                <span>Attach File</span>
                                <span style={{color: "#808A9A"}}>Please Upload ( PDF, DOC, JPG and PNG )</span>
                            </div>
                        </div>
                        <div className={style.block}>
                            <span>Govt. ID  <span style={{color: "red"}}>*</span></span>
                            <div style={{display:"flex", flexDirection:"unset", gap:"20px"}}>
                                <div className={style.attach}>
                                    <span>Add Front Side</span>
                                    <span style={{color: "#808A9A"}}>Please Upload ( PDF, DOC, JPG and PNG )</span>
                                </div>
                                <div className={style.attach}>
                                    <span>Add Back Side</span>
                                    <span style={{color: "#808A9A"}}>Please Upload ( PDF, DOC, JPG and PNG )</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5%"}}><a
                    href="Thank"> <Button className={style.btn}>Submit Form</Button> </a></div>
            </Container>
        </>
    );
}

export default Apply;