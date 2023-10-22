import React, { FC, useEffect } from "react";
import { Log } from '../../components/PageComponents/LogRegComp/LoginComp/Login';
import { useNavigate } from "react-router";

const Login: FC = () => {
    const storedEmail = localStorage.getItem('email');
    const storedToken = localStorage.getItem('token');
    const storedId = localStorage.getItem('id');
    const navigate = useNavigate();

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