import { FC, useState } from "react";
import styles from './Menu.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Logo = require('./Logo.png');

const MenuLog: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log(isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    }

    const menuClass = isMenuOpen ? "navigation responsive" : "navigation";
    return (
        <header>
            <nav className={menuClass} onClick={toggleMenu}>
                <div className={styles.wrapper}>
                    <div className={styles.header_line}>
                        <div className={styles.header_logo}>
                            <a href="/">
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
                            <a href="/about" className={styles.nav_text}>
                                About
                            </a>
                            <a href="/career" className={styles.nav_text}>
                                Career
                            </a>
                            <a href="#" className={styles.icon} id="Icon">
                                &#9776;
                            </a>
                        </div>
                        <div className={styles.user}>
                            <div className={styles.userTextBlock}>
                                <a
                                    href="/profile"
                                >
                                    
                                <div
                                    className={styles.userInfo}
                                    style={{
                                        display:'flex'
                                    }}
                                >
                                    <h1
                                        className={styles.userName}
                                        style={{
                                            marginTop:'10px',
                                            marginRight:'5px',
                                            alignItems: 'center'
                                        }}
                                    >
                                        Jerry Smith
                                    </h1>
                                    <img src={require('./userImg.png')} alt=""/>
                                </div>
                                </a>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default MenuLog;
