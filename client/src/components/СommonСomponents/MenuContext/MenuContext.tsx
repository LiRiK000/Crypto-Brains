import React from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/use-auth";
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuUnLog from "../MenuUnLog/Menu";
import MenuLog from "../MenuLog/Menu";
const MenuCont = () => {
    const dispatch = useDispatch();
    const storedToken = localStorage.getItem('token');
    const storedEmail = localStorage.getItem('email');
    const storedId = localStorage.getItem('id');
    let { isAuth, token, email, id } = useAuth();
    if (storedEmail && storedToken && storedId) {
        email = storedEmail
        id = storedId
        token = storedToken
        isAuth = true;
    }

    return isAuth ? (
        <MenuLog/>
    ) : (
        <MenuUnLog/>
    );
}

export default MenuCont;