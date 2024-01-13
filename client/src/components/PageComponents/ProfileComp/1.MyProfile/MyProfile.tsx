import React, {FC} from 'react';
import styles from './MyProfile.module.css'
const MyProfile: FC = () => {
    const storedEmail : string | null = localStorage.getItem('email')
    const username : string | null = localStorage.getItem('username')
    const id : string | null = localStorage.getItem('id');
    return (
        <div className={styles.wrpaper}>
            <div className={styles.content}>
                <div className={styles.profile}>
                    <div className={styles.ImgAndName}>
                        <img className={styles.img} src={require('./img/userImg.png')} alt="UNImg"/>
                        <h1 className={styles.username}>{username}</h1>
                    </div>
                    <div className={styles.email}>
                        <h1 className={styles.emailText}>Email is:</h1>
                        <span className={styles.emailAddress}>{storedEmail}</span>
                    </div>
                    <div className={styles.id}>
                        <h1 className={styles.idText}>You ID is:</h1>
                        <span className={styles.uid}>{id}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MyProfile;