import React from 'react';
import styles from './TF.module.css';
import { Card } from 'react-bootstrap';
import Table from "../CommonComponents/Table/Table";

const Tf = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.FeeRatesText}>Your Fee Rates</h1>
                <div className={styles.FeeRates}>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <div className={styles.cardInfo}>
                                <h1 className={styles.CardTitleText}>Level 01</h1>
                                <p className={styles.cardSubtitleText}>
                                    Security Level: Low
                                </p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardInfo}>
                                <h1 className={styles.CardTitleText}>Spot Trading Fee</h1>
                                <p className={styles.cardSubtitleText}>
                                    Maker: 0.0750%
                                </p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardInfo}>
                                <h1 className={styles.CardTitleText}>Level 1</h1>
                                <p className={styles.cardSubtitleText}>
                                    Your Description Goes Here
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.other}>
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Tf;
