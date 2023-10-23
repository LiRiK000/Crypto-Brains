import React from 'react';
import styles from './AU.module.css'
import {Card} from "react-bootstrap";
import TS from "../LandingPageComp/TraidersSaying/TS";
import TeamCards from "../TeamPageComp/Team";
const Au = () => {
    const ManagementDeportment : string[] = [require('components/PageComponents/TeamPageComp/Team/img/1.png'), require('components/PageComponents/TeamPageComp/Team/img/2.png'), require('components/PageComponents/TeamPageComp/Team/img/3.png'), require('components/PageComponents/TeamPageComp/Team/img/4.png')];

    const cardData=[
        { name: 'John Doe', position: 'CEO', imageIndex: 0 },
        { name: 'John Doe', position: 'CEO', imageIndex: 1 },
        { name: 'John Doe', position: 'CEO', imageIndex: 2 },
        { name: 'John Doe', position: 'CEO', imageIndex: 3 }
    ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.heroContainer}>
                    <div className={styles.textSection}>
                        <h1 className={styles.heroSectionText}>
                            <img src={require('./img/Line 2.png')} alt="Line" style={{marginRight: '10px'}}/>
                            Crypto Brains
                        </h1>
                    </div>
                    <h1 className={styles.heroText}>
                        Poster Can Be One of The Effective Marketing
                        and Advertising Materials.
                    </h1>
                    <p className={styles.heroTextSmall}>Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled it<br/> to make a
                        type
                        specimen book.</p>
                    <div className={styles.container}>
                        <img
                            className={styles.centeredImg}
                            src={require('./img/3d_male1.png')}
                            alt="Man"
                        />
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardItem}>
                            <div className={styles.cardItemContent}>
                                <h1 className={styles.cardTitle}>10 M+</h1>
                                <p className={styles.cardSubtitle}>Trusted Users</p>
                            </div>
                        </div>
                        <div className={styles.cardItem}>
                            <div className={styles.cardItemContent}>
                                <h1 className={styles.cardTitle}>₹ 20B +</h1>
                                <p className={styles.cardSubtitle}>Coins Purchased</p>
                            </div>
                        </div>
                        <div className={styles.cardItem}>
                            <div className={styles.cardItemContent}>
                                <h1 className={styles.cardTitle}>10 +</h1>
                                <p className={styles.cardSubtitle}>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.MeetOurTeam}>
                    <TeamCards images={ManagementDeportment} cardData={cardData} sectionName='Meet Our Team'/>
                </div>
            </div>

        </div>
    );
};
export default Au;