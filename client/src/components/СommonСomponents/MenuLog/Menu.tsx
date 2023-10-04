import { FC, useState } from "react";
import styles from './Menu.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { removeUser } from "store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/use-auth";

const Logo = require('./Logo.png');

const MenuLog: FC = () => {
    const dispatch = useDispatch();
    let { isAuth, token, email, id } = useAuth();
    const storedToken = localStorage.getItem('token');
    const storedEmail = localStorage.getItem('email');
    const storedId = localStorage.getItem('id');
    if (storedEmail && storedToken && storedId) {
        email = storedEmail
        id = storedId
        token = storedToken
        isAuth = true;
    }
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
                            <div className={styles.userImg}>
                                <img src={require('./userImg.png')} alt="Avatar" />
                            </div>
                            <div className={styles.userTextBlock}>
                                <h1 className={styles.userName}>
                                    Jerry Smith
                                </h1>
                                <Button
                                    variant="danger"
                                    onClick={() => {
                                        window.location.reload();
                                        dispatch(removeUser());
                                        isAuth = false;
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('email');
                                        localStorage.removeItem('id');
                                    }
                                    }
                                >
                                    Log out from {email}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default MenuLog;
