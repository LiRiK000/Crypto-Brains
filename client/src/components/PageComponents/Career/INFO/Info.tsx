import React from "react";
import style from "./Info.module.css";
import {Button, Container} from "react-bootstrap";

const Info = () => {
    return (
        <>
            <Container className={style.wrapper}>
                <div className={style.title}>
                    <h1>Executive Marketing Manager</h1><br/>
                    <div className={style.ann}>
                        <span>Marketing</span>
                        <div className={style.line}></div>
                        <span>New Delhi, India</span>
                        <div className={style.line}></div>
                        <span>Full Time, Remote</span>
                    </div>
                </div>
                <div style={{
                    background: "linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.20) 48.42%, rgba(255, 255, 255, 0.04) 100%)",
                    height: "1px"
                }}></div>
                <div className={style.blockText}>
                    <h1>Description</h1>
                    <div className={style.text}>
                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </div>
                    <h3>About</h3>
                    <div className={style.text}>
                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </div>
                    <h3>Role</h3>
                    <div className={style.text}>
                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>When an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </li>
                        <li>When an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    </div>
                    <h3>Responsibilities</h3>
                    <div className={style.text}>
                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </div>
                    <h3>Requirement</h3>
                    <div className={style.text}>
                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>When an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </li>
                        <li>When an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>When an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>When an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </li>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <a href={"apply"} >
                        <Button className={style.btn}>Apply now</Button></a>
                </div>
            </Container>
        </>
    );
}

export default Info;