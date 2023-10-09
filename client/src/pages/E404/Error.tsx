import React from 'react';
import { motion } from 'framer-motion';
import styles from './Error.module.css';

const Error = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ y: -1000 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', damping: 10 }}
                >
                    404
                </motion.h1>
                <motion.p
                    className={styles.message}
                    initial={{ y: 1000 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', damping: 10 }}
                >
                    Page not found
                </motion.p>
                <motion.p
                    className={styles.message}
                    initial={{ y: 1000 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', damping: 10 }}
                >
                    <a href="/">
                        <button className={styles.homeButton}>
                            Home
                        </button>
                    </a>
                </motion.p>
            </div>
        </div>
    );
};

export default Error;
