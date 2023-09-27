import React, { useState } from "react";
import './Menu.css';
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
                <div className="wrapper">
                    <div className="header-line">
                        <div className="header-logo">
                            <a href="#">
                                <img src={Logo} alt="Logo" />
                            </a>
                        </div>
                        <div className="header-text">
                            <a href="#" className="nav-text">
                                Market
                            </a>
                            <a href="#" className="nav-text">
                                Trade
                            </a>
                            <a href="#" className="nav-text">
                                Earn
                            </a>
                            <a href="#" className="nav-text">
                                About
                            </a>
                            <a href="#" className="nav-text">
                                Career
                            </a>
                            <a href="#" className="icon" id="Icon">
                                &#9776;
                            </a>
                        </div>
                        <div className="btns">
                            <Button variant="dark" className="Btn1">Login</Button>
                            <Button variant="primary" className="Btn2">Sign Up</Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Menu;
