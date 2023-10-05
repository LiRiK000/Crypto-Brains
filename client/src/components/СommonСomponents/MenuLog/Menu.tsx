import { FC, useState } from "react";
import styles from './Menu.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { removeUser } from "store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/use-auth";
import { Link } from "react-router-dom";

const Logo = require('./Logo.png');

const MenuLog: FC = () => {
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log(isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    }

    const menuClass = isMenuOpen ? "navigation responsive" : "navigation";
    const handleLogout = () => {
        window.location.reload();
        dispatch(removeUser());
        localStorage.clear();
    };
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
                                <div className={styles.userInfo}>
                                    <img src={require('./userImg.png')} alt=""/>
                                    <h1 className={styles.userName}>Jerry Smith</h1>
                                </div>
                                <Link to="/profile" className={styles.profileLink}>
      <span className={styles.profileLinkText}>Go to Profile</span>
    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default MenuLog;
