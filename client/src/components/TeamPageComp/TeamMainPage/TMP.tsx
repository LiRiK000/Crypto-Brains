import React from "react";
import styles from "./TMP.module.css";
import { Button } from "react-bootstrap";


const TMP = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imgLogo}>
                <img src={require('./img/Line 2.png')} alt="---" className={styles.imgLine} />
                <img src={require('./img/Crypto Brains.png')} alt="Crypto Brains" />
            </div>
            <div className={styles.text}>
                <h1 className={styles.mainText}>
                    Meet Our Best Team Behind Of <br />
                    Bigest Market
                </h1>
                <h2 className={styles.subText}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.
                </h2>
                <div className={styles.btnBlock}>
                    <a href="/about">
                        <Button className={styles.button} variant="primary">
                            Join Our Team
                        </Button>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default TMP;