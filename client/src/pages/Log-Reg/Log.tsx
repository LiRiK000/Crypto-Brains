import React, { FC, useEffect } from "react";
import { Log } from '../../components/PageComponents/LogRegComp/LoginComp/Login';
import {NavigateFunction, useNavigate} from "react-router";

const Login: FC = () => {
    const storedEmail : string | null = localStorage.getItem('email');
    const storedToken : string | null = localStorage.getItem('token');
    const storedId : string | null = localStorage.getItem('id');
    const navigate : NavigateFunction = useNavigate();

    useEffect(() => {
        if (storedEmail && storedToken && storedId) {
            navigate('/profile');
        }
    }, []);

    return (
        <Log />
    );
};

export default Login;