import React, { useState } from "react";
import styles from './Menu.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
const Logo = require('./Logo.png');

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const menuClass = isMenuOpen ? "navigation responsive" : "navigation";

    return (
        <header>
            <nav className={menuClass} onClick={toggleMenu}>
                <div className={styles.wrapper}>
                    <div className={styles.header_line}>
                        <div className={styles.header_logo}>
                            <a href="#">
                                <img src={Logo} alt="Logo" />
                            </a>
                        </div>
                        <div className="header-text">
                            <a href="#" className={styles.nav_text}>
                                Market
                            </a>
                            <a href="#" className={styles.nav_text}>
                                Trade
                            </a>
                            <a href="#" className={styles.nav_text}>
                                Earn
                            </a>
                            <a href="#" className={styles.nav_text}>
                                About
                            </a>
                            <a href="#" className={styles.nav_text}>
                                Career
                            </a>
                            <a href="#" className={styles.icon} id="Icon">
                                &#9776;
                            </a>
                        </div>
                        <div className={styles.btns}>
                            <Button variant="dark" className={styles.btn1}>Login</Button>
                            <Button variant="primary" className={styles.btn2}>Sign Up</Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Menu;
